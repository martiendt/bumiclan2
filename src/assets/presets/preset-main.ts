import { type Preset, presetIcons } from 'unocss'
import presetFontAwesome from './preset-fontawesome'

export default function presetMain(): Preset {
  return {
    name: 'preset-main',
    presets: [
      presetFontAwesome(),
      presetIcons({
        cdn: 'https://esm.sh/'
      })
    ]
  }
}
