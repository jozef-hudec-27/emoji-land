const randomPrice = () => {
  return Math.floor(Math.random() * 10) + 1
}

const emojis = [
  {
    emoji: '😀',
    price: randomPrice(),
    name: 'Grinning Face',
    description:
      'A yellow face with simple, open eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general pleasure and good cheer or humor.',
  },
  {
    emoji: '😂',
    price: randomPrice(),
    name: 'Face with Tears of Joy',
    description:
      'A yellow face with a big grin, uplifted eyebrows, and smiling eyes, each shedding a tear from laughing so hard. Widely used to show something is funny or pleasing.',
  },
  {
    emoji: '🙂',
    price: randomPrice(),
    name: 'Slightly Smiling Face',
    description:
      'A yellow face with simple, open eyes and a thin, closed smile. Conveys a wide range of positive, happy, and friendly sentiments. Its tone can also be patronizing, passive-aggressive, or ironic, as if saying This is fine when it’s really not.',
  },
  {
    emoji: '🙃',
    price: randomPrice(),
    name: 'Upside-Down Face',
    description:
      'Commonly used to convey irony, sarcasm, joking, or a sense of goofiness or silliness. Its intent can be similar to the bemused Oh well! of 🤷 Person Shrugging or the shruggie emoticon, ¯_(ツ)_/¯.',
  },
  {
    emoji: '🫠',
    price: randomPrice(),
    name: 'Melting Face',
    description:
      'Can be used literally to talk about extreme heat. Can also be used metaphorically to talk about embarrassment, shame, a slowly sinking sense of dread, or feeling overwhelmed in some way.',
  },
  {
    emoji: '😉',
    price: randomPrice(),
    name: 'Winking Face',
    description:
      'A yellow face with a slight smile or open mouth shown winking, usually its left eye. May signal a joke, flirtation, hidden meaning, or general positivity. Tone varies, including playful, affectionate, suggestive, or ironic.',
  },
  {
    emoji: '🥰',
    price: randomPrice(),
    name: 'Smiling Face with Hearts',
    description:
      'A yellow face with smiling eyes, a closed smile, rosy cheeks, and several hearts floating around its head. Expresses a range of happy, affectionate feelings, especially being in love. The placement of the hearts varies slightly by platform.',
  },
  {
    emoji: '😢',
    price: randomPrice(),
    name: 'Crying Face',
    description:
      'A yellow face with raised eyebrows and a slight frown, shedding a single, blue tear from one eye down its cheek. May convey a moderate degree of sadness or pain, usually less intensely than 😭 Loudly Crying Face.',
  },
  {
    emoji: '😠',
    price: randomPrice(),
    name: 'Angry Face',
    description:
      'Conveys varying degrees of anger, from grumpiness and irritation to disgust and outrage. May also represent someone acting tough or being mean.',
  },
  {
    emoji: '😈',
    price: randomPrice(),
    name: 'Smiling Face with Horns',
    description:
      'A face, usually purple, with devil horns, a wide grin, and eyes and eyebrows scrunched downward in the same manner as 😠 Angry Face on most platforms. Google’s design is red and Facebook’s has black horns and green eyes.',
  },
]

const findEmoji = (identificator) => {
  for (let i = 0; i < emojis.length; i++) {
    const { emoji, name, description } = emojis[i]
    if ([emoji, name, description].includes(identificator)) {
      return emojis[i]
    }
  }
}

export { emojis, findEmoji }
