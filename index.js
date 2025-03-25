
import chalk from "chalk";


const wilders = [
    {
        name: "Alexandre",
        color: "blue"
    },
    {
        name: "Laury",
        color: "red"
    },
    {
        name: "Sophie",
        color: "yellow"
    },
    {
        name: "Maeva",
        color: "green"
    },

];


wilders.forEach((wilder) => {
    console.log(chalk[wilder.color](wilder.name));
});

