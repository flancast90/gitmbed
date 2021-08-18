# gitmbed
> Safely embed external content in your GitHub README with simple markdown, and allow others to view it!

<br />

### Install
<a href=""><img src="get_on_cws.png" align="center"/></a>

_or, install using the Load Unpacked feature in Chrome/Edge_ as explained [here](https://webkul.com/blog/how-to-install-the-unpacked-extension-in-chrome/)

<br />

### Getting Started!

**Viewing gitmbed Content**<br />

1. After installing, the gitmbed browser extension will begin searching for embbeded content. When it finds this, it will automatically render it.

**Making gitmbed Content**<br />

1. The bare-minimum for gitmbed content is that it contains the html ``class="gitmbed"``. To tell gitmbed what to render, your element must contain the ``data-gitmbed`` attribute. The arguments inside this ``data-gitmbed`` must comply with the following syntax: ``data-gitmbed="URL of embedded content, width of embedded content, height of embedded content"``.

For example, a simple interpretation of this (acceptable in GitHub markdown) would look like this:
```html
<a href="https://github.com/flancast90/gitmbed" data-gitmbed="https://musescore.com/user/35848526/scores/6907224/embed, 100%, 500" class="gitmbed"><img width="100%" src="https://flancast90.github.io/gitmBed/button_gitmbed.png"/></a>
```

In later versions of the ``gh-pages`` branch, gitmbed will also support dynamic generation of gitmbed content through the url: gitmbed.finnsoftware.net.

<br />

### License

Gitmbed, it's content, and it's ideas are copyrighted under the Apache 2.0 License. Details on this license, your rights, and the rights of the copyright holder can be found [here](https://www.apache.org/licenses/LICENSE-2.0)

The GitHub buttons library used in the extension pop-up is licensed under the BSD-2.0 Clause

```
Copyright 2021 なつき

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```


