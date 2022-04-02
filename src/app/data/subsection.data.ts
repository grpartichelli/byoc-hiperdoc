import { SubsectionModel } from '../model/subsection.model';
import { ParagraphModel } from '../model/paragraph.model';

export const SubsectionData: Map<string, SubsectionModel> = new Map([
  [
    '1,1',
    new SubsectionModel(
      'Case',
      [
        new ParagraphModel(
          'Case Size',
          'This one is easy and obvious, but it still shouldn’t be overlooked. The first thing to consider is the sizing of your PC case. There are several distinct sizes for PC cases that include a full tower, a mid-tower, and smaller cases for mini-ITX and micro-ATX motherboards.\n' +
            '\n' +
            'The vast majority of PC builders go with a mid-tower since they aren’t too large, are widely available, and are built for standard ATX motherboards. A mid-tower can also fit smaller motherboards, but that can start to look a little awkward depending on the case.\n' +
            '\n' +
            'Full towers are much larger and fit the extended-ATX motherboards. Hardcore hobbyists with extensive experience looking for room to fit custom parts or a ton of components will usually opt for these cases.\n' +
            '\n' +
            'Finally, the mini-ITX and micro-ATX cases are all about diminutive PCs that need to fit into a small space such as a living room’s entertainment center, and they can be frustratingly difficult to deal with if you get parts that don’t fit.\n' +
            '\n',
          'https://www.enermax.com/archive/products/item/Case/MAKASHI_MK50/MAKASHI_MK50-12.png'
        ),
        new ParagraphModel(
          'Cooling',
          'The cooling solution is once again tied to the PC case size but we think it deserves a special mention due to the sheer amount of cooling solutions that are available on the market. It goes without saying that not all PC cases have the same ability to move air around inside the chassis. SFF PC cases suffer the most in this regard due to the lack of space in the enclosure. This comes down to how big the enclosure is and also how many case fans are installed inside the chassis.\n' +
            '\n' +
            'We recommend paying close attention to the number of air vents on the case and the amount of space available to mount case fans. While most PC cases will allow you to install as many as six or even more fans, there are some cases on the market with barely any space to install more than two. Your case should have at least one fan for intake to get fresh air into the chassis, and others for exhaust. If not fans, then at least make sure your case of choice has enough air vents to passively move air in and out of the chassis. An airflow case is recommended over the ones with tempered glass if you don’t have enough fans. The glass front and top panels restrict the airflow without fans to force the air in and out of the case.\n' +
            '\n',
          'https://www.corsair.com/medias/sys_master/images/images/he7/h9e/9678445543454/base-5000d/Gallery/5000D_BLACK_01/-base-5000d-Gallery-5000D-BLACK-01.png_515Wx515H'
        ),
        new ParagraphModel(
          'Front IO panel',
          'We recommend picking up a case with a couple of USB ports. Having a USB Type-C port is definitely a plus, but a lot of cases don’t have that option. It’s worth pointing out that the front-panel headphone jack usually outputs bad audio quality. We recommend using the audio ports on the motherboard or using an external audio DAC or a sound card. A lot of cases also have a handy RGB lights control button that lets you switch between different colors for the lights inside the case. Again, all this comes down to your personal preference. The Corsair Obsidian 1000D — our pick for the best full tower PC case — offers six USB ports on the front.\n' +
            '\n'
        ),
      ],
      [],
      ['https://www.youtube.com/embed/sDqOUfqcLY0'],
      [
        'https://www.howtogeek.com/719270/how-to-choose-a-pc-case-5-features-to-consider/',
        'https://www.xda-developers.com/how-to-pick-pc-case/',
      ],
      false,
      false,
      true,
      false
    ),
  ],
  [
    '1,2',
    new SubsectionModel(
      'Motherboard',
      [
        new ParagraphModel(
          'The Motherboard',
          'A motherboard is a printed circuit board (PCB) that creates a kind of backbone allowing a variety of components to communicate, and that provides different connectors for components such as the central processing unit (CPU), graphics processing unit (GPU), memory, and storage. Most computers made today, including smartphones, tablets, notebooks, and desktop computers, use motherboards to pull everything together, but the only kind you’ll typically purchase yourself are those made for desktop PCs. ooking at motherboard from the top down, you’ll see a collection of circuits, transistors, capacitors, slots, connectors, heat sinks, and more that all combine to route signals and power throughout the PC and allow you to plug in all of the required components. It’s a complicated product, and many of the technical details are beyond the scope of this how-to. Some of these details are important for your buying decision, though, and we’ll outline them for you below.',
          'https://www.intel.com.br/content/dam/www/public/us/en/images/photography-consumer/rwd/gaming/rog-strix-z390-e-gaming-motherboard-rwd.png.rendition.intel.web.864.486.png'
        ),
        new ParagraphModel(
          'CPU Compatability',
          'What CPU are you using with your motherboard?\n' +
            'The CPU you’re planning on pairing with your board will narrow down your options, since the CPU socket on a given motherboard will only work with the chip line it was designed for.\n' +
            '\n' +
            "For instance, if you’re buying an Intel 10th or 11th Generation Core processor, you’ll need a board with an LGA 1200 socket. Older 9th Generation processors need boards with an LGA 1151 socket. AMD makes this process a bit less confusing because (for now at least) the company uses the same AM4 socket for all of its mainstream current-gen chips, from Athlons all the way up to 16-core Ryzen 9 parts, although you may run into complications installing newer CPUs on previous-generation motherboards. Intel, on the other hand, has a tendency in recent years to switch sockets (or at least socket compatibility) from one generation to the next, although that's not the case this generation, with Socket 1200 sticking around for two generations."
        ),
        new ParagraphModel(
          'Sizes',
          '',
          'https://cdn.shopify.com/s/files/1/0028/7509/7153/files/Home_1200_x_628.png?v=1616653524'
        ),
      ],
      [],
      ['https://www.youtube.com/embed/TbGjYumO_aw'],
      [
        'https://www.newegg.com/insider/how-to-choose-a-motherboard/',
        'https://www.tomshardware.com/reviews/motherboard-buying-guide,5682.html',
      ]
    ),
  ],
  ['1,3', new SubsectionModel('CPU', [], [], [], [])],
  ['1,4', new SubsectionModel('Memory', [], [], [], [])],
  ['1,5', new SubsectionModel('Cooler', [], [], [], [])],
  ['1,6', new SubsectionModel('HD and SSD', [], [], [], [])],
  ['1,7', new SubsectionModel('PSU', [], [], [], [])],
  ['1,8', new SubsectionModel('Graphics Card', [], [], [], [])],
  ['1,9', new SubsectionModel('Peripherals', [], [], [], [])],
  ['1,10', new SubsectionModel('Monitor', [], [], [], [], true)],

  [
    '2,1',
    new SubsectionModel(
      'Prices',
      [],
      [],
      [],
      [],
      false,
      false,
      false,
      true,
      10
    ),
  ],
  ['2,2', new SubsectionModel('Stores', [], [], [], [])],
  ['2,3', new SubsectionModel('Tips', [], [], [], [], true)],

  [
    '3,1',
    new SubsectionModel(
      'Motherboard',
      [],
      [],
      [],
      [],
      false,
      false,
      false,
      true,
      3
    ),
  ],
  ['3,2', new SubsectionModel('CPU', [], [], [], [])],
  ['3,3', new SubsectionModel('RAM', [], [], [], [])],
  ['3,4', new SubsectionModel('Memory', [], [], [], [])],
  ['3,5', new SubsectionModel('Cooler', [], [], [], [])],
  ['3,6', new SubsectionModel('PSU', [], [], [], [])],
  ['3,7', new SubsectionModel('HD and SSD', [], [], [], [])],
  ['3,8', new SubsectionModel('Graphics Card', [], [], [], [], true)],

  [
    '4,1',
    new SubsectionModel(
      'Windows',
      [],
      [],
      [],
      [],
      false,
      false,
      false,
      true,
      8
    ),
  ],
  ['4,2', new SubsectionModel('Linux', [], [], [], [])],
  ['4,3', new SubsectionModel('Drivers', [], [], [], [], false, true)],
]);
