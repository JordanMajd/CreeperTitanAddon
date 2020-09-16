$MCPath = $env:LOCALAPPDATA + "\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\"
$BehaviorPath = $MCPath + "development_behavior_packs\titan_creeper_behavior_pack"
$ResourcePath = $MCPath + "development_resource_packs\titan_creeper_resource_pack"

Remove-Item $BehaviorPath -Force -Recurse
Copy-Item "behavior" -Destination $BehaviorPath

Remove-Item $ResourcePath -Force -Recurse
Copy-Item "resource" -Destination $ResourcePath
