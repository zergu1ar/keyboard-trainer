const words = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum dictum quam, vel consectetur elit semper at. Nam id convallis nunc. Aliquam et ligula at velit efficitur efficitur ac non lectus. Morbi consequat sollicitudin quam, ac scelerisque lorem. Duis nec nisi non augue vehicula tempor nec vel ipsum. Morbi a ex pharetra, vulputate nulla eget, venenatis magna. Nam facilisis risus id nisi vestibulum, sit amet imperdiet nisi interdum. Praesent vitae condimentum dui. Maecenas at euismod nisi. Etiam eget libero quam. Phasellus nec nunc lacinia, dignissim augue quis, placerat mauris. Fusce ut tellus sit amet metus consequat venenatis. Donec commodo nibh magna, non interdum leo tincidunt et. Sed fringilla efficitur urna in consectetur. Vivamus euismod facilisis ullamcorper. Morbi faucibus nibh tortor, a mattis urna porta quis. ' +
    'Etiam pellentesque dui tempor leo semper venenatis. Aenean semper, odio quis blandit lobortis, libero nunc volutpat lectus, faucibus fringilla quam massa vel diam. Morbi consectetur massa velit, in pulvinar tellus consectetur non. Nullam lacinia at urna id ultricies. Fusce non facilisis ante, et accumsan diam. Donec tincidunt massa massa, vel aliquam diam dapibus a. Aenean efficitur sed justo eget scelerisque. Duis efficitur sed nisl id ultrices. Vivamus tellus metus, congue sit amet elit ac, ullamcorper sollicitudin felis. Donec vulputate scelerisque dolor, non pharetra eros blandit ac. Donec pretium, mauris sit amet vulputate aliquam, ex ligula ultricies massa, a varius risus quam vitae ipsum. Quisque tincidunt feugiat vestibulum. In eleifend ornare ullamcorper. Nunc rhoncus luctus dolor, in porta arcu mollis nec.').split(" ");

const generateText = wordsCount => {
    let result = [];
    for (let i = 0; i < wordsCount; i++) {
      result.push(words[Math.floor(Math.random() * words.length)]);
    }
    return result.join(" ");
};

export default generateText;