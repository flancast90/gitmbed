<img src="https://i.imgur.com/38MdKA3.gif" align="center" width="100%"/>
![Price - Free](https://img.shields.io/badge/Price-Free-yellow?style=for-the-badge&logo=money&logoColor=lightgreen)
![Size - 194 KB](https://img.shields.io/badge/Size-194_KB-lightgreen?style=for-the-badge&logo=size&logoColor=lightgreen) ![GH Pages Deploy - Passing](https://img.shields.io/badge/GH_Pages_Deploy-Passing-green?style=for-the-badge&logo=github&logoColor=lightgreen) ![License - MIT](https://img.shields.io/badge/License-MIT-lightblue?style=for-the-badge&logo=license&logoColor=lightgreen) ![tag - v1.0.0](https://img.shields.io/badge/tag-v1.0.0-blue?style=for-the-badge)

<h1 align="center">Install</h1>
<p align="center">
  <a href="https://chrome.google.com/webstore/detail/gitmbed/cbfjhpckapddemlmidlmgoepochhfpfi">
    <img src="get_on_cws.png"/>
  </a>
</p>
  
<br />

<h1 align="center">Getting Started!</h1>
<br>
<p align="center">
<b>Viewing gitmbed Content</b>
<br /><br />

1. After installing, the gitmbed browser extension will begin searching for embbeded content. When it finds this, it will automatically render it.
<br />

<b>Making gitmbed Content</b>
<br />

<details><summary>Auto-Generation (most users)</summary>
  <ol>
    <li>Navigate to https://gitmbed.finnsoftware.net#setup.</li>
    <li>Fill-out the form with the correct data: url, width, and height</li>
    <li>Your code will show up in the textarea below the form inputs. Copy this, and paste anywhere. Anyone with the gitmbed extension will be able to view your embedded content!</li>
    <li>That's it! Congrats on the setup! 🎉</li>
  </ol>
</details>
<br />
<details><summary>Manual Setup</summary>
  <ol>
    <li>The bare-minimum for gitmbed content is that it contains the page contains an image element (<code><img></code>) with the HTML <code>alt</code> attribute. Inside this <code>alt</code>, you must append the arguments <code>embed src</code>, <code>embed width</code>, <code>embed height</code></li>
    <li>As stated on the <a href="https://gitmbed.finnsoftware.net">gitmbed homepage</a>, the <code>embed_width</code> and <code>embed_height</code> arguments can take either a numerical px, percent, em, or rem value. It should also be noted that the <code>embed_url</code> must be a full url, including <code>https://</code>, <code>http://</code>, or <code>file://</code>
  </ol>
</details>
</p>

<br />

### Example

The code for the below example looks like the following (will show-up as "Download Extension to View", unless extension is downloaded, where it will be an embed to my latest sheet music 🎵):
```html
<img alt="gitmbed=https://musescore.com/user/35848526/scores/6907224/embed,100%,500" width="100%" src="https://gitmbed.finnsoftware.net/assets/img/button_gitmbed.png"/>
```

<a href="https://chrome.google.com/webstore/detail/gitmbed/cbfjhpckapddemlmidlmgoepochhfpfi"><img width="100%" alt="gitmbed=https://musescore.com/user/35848526/scores/6907224/embed,100%,500" src="https://gitmbed.finnsoftware.net/assets/img/button_gitmbed.png"/></a>

<br />

### License

Gitmbed, it's content, and it's ideas are copyrighted under the Apache 2.0 License. Details on this license, your rights, and the rights of the copyright holder can be found [here](https://www.apache.org/licenses/LICENSE-2.0)


The GitHub [Primer.css](https://www.primer.style/css) is under MIT License.

```
The MIT License (MIT)

Copyright (c) 2021 GitHub Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
