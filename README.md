# vg-custom-logo
Include a custom logo overlay when vg-player is not playing

## Instructions
# Install
`npm install vg-custom-logo --save`

# Add import
`import {VgCustomLogoModule} from "vg-custom-logo";`
   

```
imports: [
 ...,
 VgCustomLogoModule,
 ...,
],
```

# Add to player

```
<vg-player>
  ...
  <vg-custom-logo src="assets/img/logo.svg"></vg-custom-logo>
  ...
</vg-player>
```

![Sample Logo Result](https://i.imgur.com/nowKAEb.png)
![Now when playing](https://i.imgur.com/VpoeVmg.png)
