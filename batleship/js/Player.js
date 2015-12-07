/**
 * Created by rodrigocespedes on 12/7/2015.
 */

function Player(name, config)
{
    this.name = name;
    this.table = new Table(config.sizeTable, config);
}

