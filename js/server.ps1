# Simple PowerShell HTTP Server
$port = 8000
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "SOLEVANT Web Server started at http://localhost:$port/"
    Write-Host "Press Ctrl+C to stop the server."
} catch {
    Write-Error "Failed to start listener on port $($port): $_"
    exit 1
}

$currentDir = Get-Location

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        # Parse path
        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq "/") {
            $urlPath = "/index.html"
        }
        
        # Sanitize path to prevent directory traversal
        $urlPath = $urlPath.Replace("/", "\")
        if ($urlPath.StartsWith("\")) {
            $urlPath = $urlPath.Substring(1)
        }
        
        $localPath = [System.IO.Path]::Combine($currentDir.Path, $urlPath)
        
        if (Test-Path $localPath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            
            # Content Type detection
            $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
            switch ($ext) {
                ".html" { $response.ContentType = "text/html; charset=utf-8" }
                ".htm"  { $response.ContentType = "text/html; charset=utf-8" }
                ".css"  { $response.ContentType = "text/css" }
                ".js"   { $response.ContentType = "application/javascript; charset=utf-8" }
                ".svg"  { $response.ContentType = "image/svg+xml" }
                ".png"  { $response.ContentType = "image/png" }
                ".jpg"  { $response.ContentType = "image/jpeg" }
                ".jpeg" { $response.ContentType = "image/jpeg" }
                default { $response.ContentType = "application/octet-stream" }
            }
            
            $response.StatusCode = 200
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            # File Not Found
            $response.StatusCode = 404
            $response.ContentType = "text/plain; charset=utf-8"
            $msg = "404 Not Found: $urlPath"
            $bytes = [System.Text.Encoding]::UTF8.GetBytes($msg)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        }
        $response.Close()
    } catch {
        # Catch connection aborts or context errors gracefully
        Write-Verbose "Request error: $_"
    }
}
