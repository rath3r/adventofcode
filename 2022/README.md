# Advent of code 2022

## Goal

* do more than last year
* use typescript
* use VI

## Usage

`tsc-watch --onSuccess "node ./dist/day2/index.js"`

## Vi setup

[ultimate-vim-typescript-setup](https://pragmaticpineapple.com/ultimate-vim-typescript-setup/)

This is the contents of the `.vimrc` which allows vi to work as abetter IDE:
```
set smartindent
set tabstop=4
set shiftwidth=4
set expandtab
set number

" Plugins will be downloaded under the specified directory.
call plug#begin(has('nvim') ? stdpath('data') . '/plugged' : '~/.vim/plugged')

" Declare the list of plugins.
Plug 'pangloss/vim-javascript'
Plug 'leafgarland/typescript-vim'
Plug 'maxmellon/vim-jsx-pretty'

" List ends here. Plugins become visible to Vim after this call.
call plug#end()
```

