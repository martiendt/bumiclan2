import { type Preset, presetIcons } from 'unocss'

export default function presetFontawesome(): Preset {
  return {
    name: 'preset-fontawesome',
    presets: [
      presetIcons({
        collections: {
          fab: async (iconName: string) =>
            await fetch(`${process.env.VITE_FONTAWESOME_ICON_BASEURL}/brands/${iconName}.svg`).then(
              (res) => res.text()
            ),
          far: async (iconName: string) =>
            await fetch(
              `${process.env.VITE_FONTAWESOME_ICON_BASEURL}/regular/${iconName}.svg`
            ).then((res) => res.text()),
          fas: async (iconName: string) =>
            await fetch(`${process.env.VITE_FONTAWESOME_ICON_BASEURL}/solid/${iconName}.svg`).then(
              (res) => res.text()
            ),
          fal: async (iconName: string) =>
            await fetch(`${process.env.VITE_FONTAWESOME_ICON_BASEURL}/light/${iconName}.svg`).then(
              (res) => res.text()
            ),
          fat: async (iconName: string) =>
            await fetch(`${process.env.VITE_FONTAWESOME_ICON_BASEURL}/thin/${iconName}.svg`).then(
              (res) => res.text()
            ),
          fad: async (iconName: string) =>
            await fetch(
              `${process.env.VITE_FONTAWESOME_ICON_BASEURL}/duotone/${iconName}.svg`
            ).then((res) => res.text()),
          fasr: async (iconName: string) =>
            await fetch(
              `${process.env.VITE_FONTAWESOME_ICON_BASEURL}/sharp-regular/${iconName}.svg`
            ).then((res) => res.text()),
          fass: async (iconName: string) =>
            await fetch(
              `${process.env.VITE_FONTAWESOME_ICON_BASEURL}/sharp-solid/${iconName}.svg`
            ).then((res) => res.text()),
          fasl: async (iconName: string) =>
            await fetch(
              `${process.env.VITE_FONTAWESOME_ICON_BASEURL}/sharp-light/${iconName}.svg`
            ).then((res) => res.text())
        },
        customizations: {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          transform(svg, collection, icon) {
            if (['fab', 'far', 'fas', 'fal', 'fat', 'fad'].includes(collection))
              return svg.replace('path', 'path fill="currentColor"')

            return svg
          }
        }
      })
    ]
  }
}
