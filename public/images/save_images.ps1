$base64Images = @{
    "cash-unlimited.jpg" = "data:image/jpeg;base64,..."  # Base64 data for cash-unlimited card
    "cash-rewards.jpg" = "data:image/jpeg;base64,..."    # Base64 data for cash-rewards card
    "points.jpg" = "data:image/jpeg;base64,..."          # Base64 data for points card
    "business.jpg" = "data:image/jpeg;base64,..."        # Base64 data for business card
}

foreach ($image in $base64Images.GetEnumerator()) {
    $outputPath = Join-Path $PSScriptRoot $image.Key
    $base64Data = $image.Value -replace "data:image/jpeg;base64,", ""
    [System.Convert]::FromBase64String($base64Data) | Set-Content -Path $outputPath -Encoding Byte
    Write-Host "Saved $($image.Key)"
}
