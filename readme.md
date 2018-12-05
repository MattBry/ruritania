# Ruritania
A command line tool for worldbuilding
## Getting Started
`npm install -g ruritania` will globally install the CLI

`ruritania create` will set up your project and create a World. Every entity is descended from the World, which represents your Ruritania project as a whole.

`ruritania add` allows you to add entities. Currenly the only supported entity is a Country, which represents a geographic part of a world. Anticipated entities include:
- Province
- Region
- Area
- City
- District
- Person
- Organization
- Business

`ruritania render` converts your ruritania data into a hyperlinked HTML wiki, currently unstyled.

Your Ruritania data will exist in two folders in the directory in which you have created: data and wiki. The data folder contains JSON files that are used to render the HTML files for the wiki.
## FAQ
Q. This is very incomplete.

A. Sorry. This is a labor of love I work on when I can. Entities will be made more complex, and more entities will be added, in the future.

Q. The CLI doesn't work.

A. Install a newer version of Node with `nvm install` or switch to a newer one with `nvm use`.
