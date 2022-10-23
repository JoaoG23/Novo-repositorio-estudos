let options = [
    'a) pid',
    'b) title',
    'c) arch',
    'd) platform',
    'e) enviroments',
    'm) memory usage',
    'u) uptime',
    'v) version',
    'q) quit'
];

exports.showOptions = () => {
    options.forEach(option => {
        console.info(option)
    })
}