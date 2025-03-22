$images = @{
    "pnc-cash-unlimited.png" = "https://raw.githubusercontent.com/yourusername/pnc-banking-app/main/public/credit-cards/pnc-cash-unlimited.png"
    "pnc-cash-rewards.png" = "https://raw.githubusercontent.com/yourusername/pnc-banking-app/main/public/credit-cards/pnc-cash-rewards.png"
    "pnc-points.png" = "https://raw.githubusercontent.com/yourusername/pnc-banking-app/main/public/credit-cards/pnc-points.png"
    "pnc-business.png" = "https://raw.githubusercontent.com/yourusername/pnc-banking-app/main/public/credit-cards/pnc-business.png"
}

foreach ($image in $images.GetEnumerator()) {
    $outputPath = Join-Path $PSScriptRoot $image.Key
    Invoke-WebRequest -Uri $image.Value -OutFile $outputPath
    Write-Host "Downloaded $($image.Key)"
}
