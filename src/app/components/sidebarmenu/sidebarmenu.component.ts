import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Item {
  id: number;
  name: string;
  image: string;
  viewrs: number;
  logo: string;
  addedToCart: boolean;
  desc: string;
  time: string;
}

@Component({
  selector: 'app-sidebarmenu',
  templateUrl: './sidebarmenu.component.html',
  styleUrls: ['./sidebarmenu.component.css'],
})
export class SidebarmenuComponent implements OnInit {
  videos: any;
  items: Item[] = [
    {
      id: 1,
      name: 'Kokorowatari',
      image: 'https://linisehat.com/wp-content/uploads/2020/12/hiking.jpg',
      viewrs: 444,
      addedToCart: false,
      logo: `fa fa-video-camera`,
      time: '44 minutes ago',
      desc: `
        Demon sword that harms and effectively kills oddities.
        The sword belonged to a powerful  Kiss-Shot Acerola-Orion Heart-Under-Blade.`,
    },
    {
      id: 2,
      name: 'Star Platinum',
      image:
        'https://lifeexperiencedegreepros.com/wp-content/uploads/2019/01/Best-Holidays-For-Families-in-Africa.jpg',
      viewrs: 555,
      addedToCart: false,
      logo: 'fa fa-lock',
      time: '44 minutes ago',
      desc: `Star Platinum is the Stand of Kujo Jotaro.
      It has long, flowing hair, and resembling a tall, well-built man.
      It is silent, except when it throws punches, during which it cries "ORAORAORA" loudly and repeatedly.`,
    },

    {
      id: 3,
      name: '3D Maneuver Gear',
      viewrs: 200,
      addedToCart: false,
      logo: 'fa fa-comment',
      time: '44 minutes ago',
      image:
        'https://www.incimages.com/uploaded_files/image/1920x1080/getty_1141196125_411306.jpg',
      desc: `The vertical maneuvering equipment is a set of equipment developed by humans allowing for great mobility.
      The equipment enables the user to fight in a 3D space as opposed to a 2D one.
      The equipment itself takes the form of a body harness that encompasses much of the body below the neck.`,
    },
    {
      id: 4,
      name: 'Excalibur',
      viewrs: 300,
      addedToCart: false,
      logo: 'fa fa fa-heart',
      time: '44 minutes ago',
      image:
        'https://1.bp.blogspot.com/-GLyYqnoJ0aA/XoGkI0EhbiI/AAAAAAAA-zk/3A7Ouql_9Eg80k_us7gaDo6HiVoc0xE7QCLcBGAsYHQ/s640/persiapan%2Bmendaki%2Bgunung.jpg',
      desc: `Excalibur: Sword of Promised Victory is the strongest and most majestic holy sword that symbolizes King Arthur.
      As that which can be called the physical actualization of her ideals and the symbol of her heroism,
      it is her greatest and most powerful Noble Phantasm.`,
    },
    {
      id: 5,
      name: 'Dragon Slayer',
      viewrs: 450,
      addedToCart: false,
      logo: 'fa fa-video-camera',
      time: '44 minutes ago',
      image:
        'http://indonesia360derajat.files.wordpress.com/2014/04/satu.jpg?w=783&h=586',
      desc: `It was too big to be called a sword. Massive, thick, heavy, and far too rough.
      Indeed, it was a heap of raw iron.
      The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.`,
    },
    {
      id: 6,
      name: 'Dragon Slayer',
      viewrs: 450,
      addedToCart: false,
      logo: 'fa fa-video-camera',
      time: '44 minutes ago',
      image:
        'http://indonesia360derajat.files.wordpress.com/2014/04/satu.jpg?w=783&h=586',
      desc: `It was too big to be called a sword. Massive, thick, heavy, and far too rough.
      Indeed, it was a heap of raw iron.
      The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.`,
    },
    {
      id: 7,
      name: 'Dragon Slayer',
      viewrs: 450,
      addedToCart: false,
      logo: 'fa fa-video-camera',
      time: '44 minutes ago',
      image:
        'http://indonesia360derajat.files.wordpress.com/2014/04/satu.jpg?w=783&h=586',
      desc: `It was too big to be called a sword. Massive, thick, heavy, and far too rough.
      Indeed, it was a heap of raw iron.
      The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.`,
    },
    {
      id: 8,
      name: 'Dragon Slayer',
      viewrs: 450,
      addedToCart: false,
      logo: 'fa fa-love',
      time: '44 minutes ago',
      image:
        'http://indonesia360derajat.files.wordpress.com/2014/04/satu.jpg?w=783&h=586',
      desc: `It was too big to be called a sword. Massive, thick, heavy, and far too rough.
      Indeed, it was a heap of raw iron.
      The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.`,
    },
    {
      id: 9,
      name: 'Dragon Slayer',
      viewrs: 450,
      addedToCart: false,
      logo: '',
      time: '44 minutes ago',
      image:
        'http://indonesia360derajat.files.wordpress.com/2014/04/satu.jpg?w=783&h=586',
      desc: `It was too big to be called a sword. Massive, thick, heavy, and far too rough.
      Indeed, it was a heap of raw iron.
      The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.`,
    },
    {
      id: 10,
      name: 'Dragon Slayer',
      viewrs: 450,
      addedToCart: false,
      logo: '',
      time: '44 minutes ago',
      image:
        'http://indonesia360derajat.files.wordpress.com/2014/04/satu.jpg?w=783&h=586',
      desc: `It was too big to be called a sword. Massive, thick, heavy, and far too rough.
      Indeed, it was a heap of raw iron.
      The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.`,
    },
    {
      id: 11,
      name: 'Dragon Slayer',
      viewrs: 450,
      addedToCart: false,
      logo: '',
      time: '44 minutes ago',
      image:
        'http://indonesia360derajat.files.wordpress.com/2014/04/satu.jpg?w=783&h=586',
      desc: `It was too big to be called a sword. Massive, thick, heavy, and far too rough.
      Indeed, it was a heap of raw iron.
      The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.`,
    },
    {
      id: 12,
      name: 'Dragon Slayer',
      viewrs: 450,
      addedToCart: false,
      logo: '',
      time: '44 minutes ago',
      image:
        'http://indonesia360derajat.files.wordpress.com/2014/04/satu.jpg?w=783&h=586',
      desc: `It was too big to be called a sword. Massive, thick, heavy, and far too rough.
      Indeed, it was a heap of raw iron.
      The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.`,
    },
    {
      id: 14,
      name: 'Dragon Slayer',
      viewrs: 450,
      addedToCart: false,
      logo: '',
      time: '44 minutes ago',
      image:
        'http://indonesia360derajat.files.wordpress.com/2014/04/satu.jpg?w=783&h=586',
      desc: `It was too big to be called a sword. Massive, thick, heavy, and far too rough.
      Indeed, it was a heap of raw iron.
      The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.`,
    },
    {
      id: 15,
      name: 'Dragon Slayer',
      viewrs: 450,
      addedToCart: false,
      logo: '',
      time: '44 minutes ago',
      image:
        'http://indonesia360derajat.files.wordpress.com/2014/04/satu.jpg?w=783&h=586',
      desc: `It was too big to be called a sword. Massive, thick, heavy, and far too rough.
      Indeed, it was a heap of raw iron.
      The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.`,
    },
    {
      id: 16,
      name: 'Dragon Slayer',
      viewrs: 450,
      addedToCart: false,
      logo: '',
      time: '44 minutes ago',
      image:
        'http://indonesia360derajat.files.wordpress.com/2014/04/satu.jpg?w=783&h=586',
      desc: `It was too big to be called a sword. Massive, thick, heavy, and far too rough.
      Indeed, it was a heap of raw iron.
      The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.`,
    },
    {
      id: 17,
      name: 'Dragon Slayer',
      viewrs: 450,
      addedToCart: false,
      logo: '',
      time: '44 minutes ago',
      image:
        'http://indonesia360derajat.files.wordpress.com/2014/04/satu.jpg?w=783&h=586',
      desc: `It was too big to be called a sword. Massive, thick, heavy, and far too rough.
      Indeed, it was a heap of raw iron.
      The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.`,
    },
  ];

  buttonClose!: boolean;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.videos = this.getDataId(+this.route.snapshot.params['id']);
    console.log(this.videos);
  }

  Close() {
    this.buttonClose = false;
  }

  getDataId(id: number) {
    return this.items.findIndex((x) => x.id === id);
  }
}
