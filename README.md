# Jupyterlab Neon Theme

A flat, 80's neon inspired theme for JupyterLab.

<img src="https://raw.githubusercontent.com/yeebc/jupyterlab-neon-theme/master/screenshot/Neon Night.png" />
<img src="https://raw.githubusercontent.com/yeebc/jupyterlab-neon-theme/master/screenshot/Neon Sunset.png" />

This theme is hightly inspired by artworks of 80's Neon, Synthwave and Cyberpunk. It is optimized for **long-term use** but cooool and colorful.

## Bonuses
1. Search tool + neon billboard
2. Collapser + neon light
3. Scrollbar + FM-84's "Atlas"  (compatible with Chrome)
4. A surprise in the presentation mode (Top menu --> View --> Presention mode)

## Customize
You may don't like the default background or the transparent UI, so codes of these controversial designs are put separately into [`custom.css`](https://github.com/yeebc/jupyterlab-neon-theme/tree/master/style/custom.css) and commented detaily for you to customize.

### 1. Transparent left/top bar
PLease follow the comments to ajust the transparency.

### 2. Background
Two gradient backgrounds, 'Neon Night' and 'Neon Sunset', are provide. The default style is 'Neon Night' and you can uncomment codes to employ 'Neon Sunset' style.

To use an images as background, uncomment the relative part of codes, and change the url to the path of your image.

### 3. Fonts
To change fonts of editor and neon, firstly, add your font files to [`fonts`](https://github.com/yeebc/jupyterlab-neon-theme/tree/master/style/fonts) directory and update [`fonts.css`](https://github.com/yeebc/jupyterlab-neon-theme/blob/master/style/fonts.css) to register them. Then follow my comments to employ your registered fonts.


## Prerequisites

* JupyterLab >= 1.0.0

## Installation

```bash
jupyter labextension install @yeebc/jupyterlab_neon_theme
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```

## Thanks
You may also like  [SynthWave '84](https://github.com/robb0wen/synthwave-vscode), my favorite VS Code theme,  with similar style and  it is more compatible with HTML & CSS, JS.
