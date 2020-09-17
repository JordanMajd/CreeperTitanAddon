$MCPath = $env:LOCALAPPDATA + "\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\"
$BehaviorPath = $MCPath + "development_behavior_packs\titan_creeper_behavior_pack"
$ResourcePath = $MCPath + "development_resource_packs\titan_creeper_resource_pack"

Remove-Item $BehaviorPath -Force -Recurse -ErrorAction SilentlyContinue
Copy-Item "behavior" -Destination $BehaviorPath -Recurse

Remove-Item $ResourcePath -Force -Recurse -ErrorAction SilentlyContinue
Copy-Item "resource" -Destination $ResourcePath -Recurse
