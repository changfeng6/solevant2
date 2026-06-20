# Create products folder if it doesn't exist
New-Item -ItemType Directory -Force -Path "images/products"

$images = @{
  "images/products/sneakers_1.jpg" = "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80"
  "images/products/sneakers_2.jpg" = "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80"
  "images/products/sneakers_3.jpg" = "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80"
  "images/products/leather_1.jpg"  = "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80"
  "images/products/leather_2.jpg"  = "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=600&q=80"
  "images/products/leather_3.jpg"  = "https://images.pexels.com/photos/4435222/pexels-photo-4435222.jpeg?auto=compress&cs=tinysrgb&w=600"
  "images/products/heels_1.jpg"    = "https://images.pexels.com/photos/137603/pexels-photo-137603.jpeg?auto=compress&cs=tinysrgb&w=600"
  "images/products/heels_2.jpg"    = "https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg?auto=compress&cs=tinysrgb&w=600"
  "images/products/heels_3.jpg"    = "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=600&q=80"
  "images/products/casual_1.jpg"   = "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600"
  "images/products/casual_2.jpg"   = "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80"
  "images/products/casual_3.jpg"   = "https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=600"
  "images/products/others_1.jpg"   = "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=600&q=80"
  "images/products/others_2.jpg"   = "https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=600"
  "images/products/accessories_1.jpg" = "https://images.unsplash.com/photo-1549488344-c367f73a0741?auto=format&fit=crop&w=600&q=80"
  "images/products/accessories_2.jpg" = "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=600&q=80"
  "images/hero_bg.jpg"             = "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1200"
  "images/cat_sneakers.jpg"        = "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=600&q=80"
  "images/cat_leather.jpg"         = "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
  "images/cat_heels.jpg"           = "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80"
  "images/craft.jpg"               = "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?auto=format&fit=crop&w=600&q=80"
}

foreach ($item in $images.GetEnumerator()) {
  $path = $item.Key
  $url = $item.Value
  Write-Host "Downloading $url to $path ..."
  try {
    $webclient = New-Object System.Net.WebClient
    $webclient.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)")
    $webclient.DownloadFile($url, $path)
    Write-Host "SUCCESS: Saved $path"
  } catch {
    Write-Host "ERROR downloading $url : $_"
  }
}
