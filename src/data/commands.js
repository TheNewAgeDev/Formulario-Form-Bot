const fs = require("fs");
const Util = require("util");

const config = Util.getConfig()[1];

class Command {
    constructor(infCommand) {
        this.name = infCommand.name;
        this.args = infCommand.args;
        this.category = infCommand.category;
        this.description = infCommand.description;
        this.alias = infCommand.alias;
    }
}