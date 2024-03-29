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
  [
    '1,3',
    new SubsectionModel(
      'CPU',
      [
        new ParagraphModel(
          'The CPU',
          'The CPU is the core component that defines a computing device, and while it is of critical importance, the CPU can only function alongside other hardware. The silicon chip sits in a special socket located on the main circuit board (motherboard or mainboard) inside the device. It is separate from the memory, which is where information is temporarily stored. It is also separate from the graphics card or graphics chip, which renders the video and 3D graphics that are displayed on your screen.',
          'https://miro.medium.com/max/300/1*bhf2tYvLEXyzg0M_3MBhuQ.png'
        ),
        new ParagraphModel(
          'Core Count',
          'Modern gaming CPUs have multiple cores. Each one of these cores acts like an additional processor, which allows the CPU to process multiple instructions simultaneously.\n' +
            '\n' +
            'Many PC games make use of multiple cores, but higher core count becomes increasingly important when undertaking CPU-intensive tasks outside of gaming, like encoding video or using complex programs for high-level content creation.\n' +
            '\n' +
            'If you’re using your CPU for more than just gaming — for example, streaming gameplay while playing — additional cores can make a difference. A CPU with a higher core count can handle workloads that a single-core CPU, even one with a very high clock speed, might struggle with.'
        ),
        new ParagraphModel(
          'Socket Compatibility',
          'Socket compatibility is a primary concern when it comes to buying a processor. The socket compatibility enables the interface between a motherboard and its CPU. If a motherboard has already been acquired, make sure that the processor installed is compatible with the motherboard’s socket. Alternately, when building a computer around the processor, make sure that the motherboard is compatible with the existing processor.',
          'https://pngimg.com/uploads/cpu/cpu_PNG53.png'
        ),
      ],
      [],
      ['https://www.youtube.com/embed/bcVBqwlnmlM'],
      [
        'https://www.digitaltrends.com/computing/what-is-a-cpu/',
        'https://www.intel.com/content/www/us/en/gaming/resources/gaming-cpu.html',
        'https://www.newegg.com/insider/how-to-choose-a-cpu/',
      ]
    ),
  ],
  [
    '1,4',
    new SubsectionModel(
      'Memory',
      [
        new ParagraphModel(
          'The RAM Memory',
          'RAM is essentially a device’s short-term memory. It temporarily stores (remembers) everything currently running on a device, like all OS-specific services and any web browser, image editor, or game you’re playing.\n' +
            '\n' +
            'RAM prevents the CPU from digging through the device’s slower storage — like a hard drive or even a solid-state drive (SSD) — every time you request a new browser tab or load a new enemy to shoot. As fast as storage is compared to drives of years gone by, they’re still far slower than RAM.\n' +
            '\n' +
            'Data that resides in RAM is readable from any capable component at almost the same speed. Because it has a hard-wired connection to the device, there’s no real latency in cabling or connection.',
          'https://images.tcdn.com.br/img/img_prod/785242/memoria_ram_win_memory_ddr4_2666mhz_4gb_desktop_cl19_udimm_wh5sd4g6c4uaz_7155_1_ed86ab2c1718d84f9b5bf5e44b57441e.png'
        ),
        new ParagraphModel(
          'Motherboard Compatibility and RAM Types',
          'Depending on the age and purchase price of your computer, it was designed to use one of the following types of memory technology:\n' +
            '\n' +
            'SDR (single data rate) technology primarily appeared in systems manufactured before 2002\n' +
            'DDR2 (second generation double data rate) technology began to appear mid-2004\n' +
            'DDR3 technology began to appear in late 2007\n' +
            'DDR4 technology began to appear in 2014\n' +
            ' \n' +
            '\n' +
            "As a general rule, each generation of DDR technology is faster, runs on lower voltage, and boasts lower latencies than previous-generation technology. However, if your system was designed for DDR2 technology, it won't be able to support DDR3 modules. Since each type of memory has different notch locations (which are important for installation), different memory technologies aren't compatible with each other. Motherboards are generally only able to support one type of memory technology.\n" +
            '\n',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Desktop_DDR_Memory_Comparison.svg/1200px-Desktop_DDR_Memory_Comparison.svg.png'
        ),
      ],
      [],
      ['https://www.youtube.com/embed/mkpCvaBBo-c'],
      [
        'https://www.digitaltrends.com/computing/what-is-ram/',
        'https://www.crucial.com/support/memory-motherboard-compatibility',
      ]
    ),
  ],
  [
    '1,5',
    new SubsectionModel(
      'Cooler',
      [
        new ParagraphModel(
          'Air Coolers',
          'Air coolers are ideal for general PC users. They are inexpensive, and aftermarket air coolers can be used as replacements for stock air coolers. The cooling units actively dissipate hot air using specially designed heat fins. These fins keep temperatures in the PC case low.\n' +
            '\n' +
            'Air coolers can be an ideal solution for miniature custom computers and desktops that require additional cooling beyond stock model coolers.' +
            'Air coolers are not small. A typical aftermarket air cooler is quite large, in comparison to water cooling options. This means that these radiators may not fit comfortably in every PC case. Plus, if you’re building a gaming PC or another system that will frequently run at hotter temperatures, an air cooler might not be enough for your needs.\n' +
            '\n' +
            'Also, most aftermarket air cooling fans run at high RPMs, making fan noise much louder than both stock air units and water-based coolers.',
          'https://www.kabum.com.br/conteudo/descricao/214516/img/TOPo.png'
        ),
        new ParagraphModel(
          'AIO Cooler',
          'As with air coolers, there’s a wide selection of available options, but most fall into two categories: All-in-One (AIO) coolers, or custom cooling loops. We’ll mostly be focusing on All-in-One (AIO) coolers here, though the fundamental principles of how the liquid cools the CPU are the same in both.\n' +
            'Similar to air cooling, the process starts with a baseplate that is connected to the IHS of the CPU with a layer of thermal paste. This allows for better heat transfer between the two surfaces. The metal surface of the baseplate is part of the waterblock, which is designed to be filled with coolant.\n' +
            'The coolant absorbs heat from the baseplate as it moves through the waterblock. It then continues to move through the system and upward through one of two tubes to a radiator. The radiator exposes the liquid to air, which helps it cool, and fans attached to the radiator then move the heat away from the cooler. The coolant then re-enters the waterblock, and the cycle begins again.\n',
          'https://www.asus.com/us/site/all-in-one-liquid-cooling/websites/img/series/ROG-Strix.png'
        ),
        new ParagraphModel(
          'Water Cooling System',
          'Water cooling systems consist of a water block, pump, radiator, pipes and, optionally, a reservoir. The pump pushes the liquid through the system. The pumped liquid flows through the water block -- which is attached to the CPU or GPU -- where the heat is transferred from the component to the liquid.',
          'https://cwsmgmt.corsair.com/landing/hydro-x/img/hydro-x-home/hero-product-white.png'
        ),
      ],
      [],
      ['https://www.youtube.com/embed/Vex9_84VpYs'],
      [
        'https://www.newegg.com/insider/how-to-choose-the-right-cpu-cooler-pc-radiator-for-you/',
        'https://www.intel.com/content/www/us/en/gaming/resources/cpu-cooler-liquid-cooling-vs-air-cooling.html',
        'https://www.techtarget.com/searchdatacenter/definition/water-cooling#:~:text=Water%20cooling%20systems%20consist%20of,the%20component%20to%20the%20liquid.',
      ]
    ),
  ],
  [
    '1,6',
    new SubsectionModel(
      'HD and SSD',
      [
        new ParagraphModel(
          'Hard Drive',
          'A hard disk drive (HDD) is composed of a platter that contains compartments to hold data. This data is your operating system, applications, and any files you have created. There is also an accuator arm that moves across the platter to read or write the information requested. To make this process faster, the platter spins as the accuator arm moves across it.\n' +
            '\n' +
            'The compartments that hold the data can be spread out all over the hard disk. That is, data is not written sequentially. There is an indexing system to allow the accuator arm to find all of the pertinent data.\n' +
            '\n' +
            'The platter and the accuator arm are delicate, so they are covered by a steel case. This prevents damage to the disk under normal circumstances.',
          'https://cdn.shopify.com/s/files/1/0571/0954/5110/products/f221c74baa9d092bccc2cbfd340df6884e04c4c1c188dece444d011db14da76c_800x.png?v=1648358898'
        ),
        new ParagraphModel(
          'Solid State Drive',
          'A solid-state drive (SSD) is a solid-state storage device that uses integrated circuit assemblies to store data persistently, typically using flash memory, and functioning as secondary storage in the hierarchy of computer storage. It is also sometimes called a semiconductor storage device, a solid-state device or a solid-state disk,[1] even though SSDs lack the physical spinning disks and movable read–write heads used in hard disk drives (HDDs) and floppy disks.[2]\n' +
            '\n' +
            'Compared with electromechanical drives, SSDs are typically more resistant to physical shock, run silently, and have higher IOPS and lower latency.[3] SSDs store data in semiconductor cells.',
          'https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/ssd-plus-sata-iii-ssd/gallery/ssd-plus-sata-iii-ssd-left.png.thumb.1280.1280.png'
        ),
      ],
      [],
      ['https://www.youtube.com/embed/YQEjGKYXjw8'],
      [
        'https://www.crucial.com/articles/pc-builders/what-is-a-hard-drive',
        'https://en.wikipedia.org/wiki/Solid-state_drive',
      ]
    ),
  ],
  [
    '1,7',
    new SubsectionModel(
      'PSU',
      [
        new ParagraphModel(
          'The Power Supply',
          'A power supply is a component that supplies power to at least one electric load. Typically, it converts one type of electrical power to another, but it may also convert a a different form of energy – such as solar, mechanical, or chemical - into electrical energy.\n' +
            '\n' +
            'A power supply provides components with electric power. The term usually pertains to devices integrated within the component being powered. For example, computer power supplies convert AC current to DC current and are generally located at the rear of the computer case, along with at least one fan.\n' +
            '\n' +
            'A power supply is also known as a power supply unit, power brick or power adapter.\n' +
            '\n',
          'https://www.corsair.com/medias/sys_master/images/images/h0c/h5b/9011430490142/-CP-9020178-WW-Gallery-RM650x-PSU-01.png'
        ),
        new ParagraphModel(
          'Choosing a PSU',
          'First, always buy a power supply from a reputable manufacturer, and look for reviews of it before you buy. Avoid cheap, generic power supplies, which tend to be substandard. Look for reputable brands that offer solid warranties and support. Corsair, Seasonic, EVGA, and Antec are manufacturers with reputations for producing high-quality power supplies, though even they may offer a few duds among all the studs. Do your homework!\n' +
            '\n' +
            'Larger, heavier units are preferable to puny, lightweight models. Higher-quality power supplies almost always use bigger and better capacitors, chokes, and other internal components, and they come outfitted with larger heatsinks for superior heat dissipation—all of which translates into more weight. Larger cooling fans, which typically move more air while making less noise than smaller fans, are another plus.\n' +
            '\n' +
            'Silverstone\n' +
            'A 6+2 pin connector.\n' +
            'Of course, you should also check the PSU’s connectors to confirm the unit is compatible with your particular system. The term 20+4 pin refers to a connector that can function as either a 20-pin connector or a 24-pin connector. In the 6+2 pin connector shown at right, you can snap two of the pins in the connector on or off to suit your needs.\n' +
            '\n' +
            'The vast majority of consumer PCs use standard ATX power supplies. Smaller units and units specially designed for enterprise and server applications are also available; but for common desktop systems, ATX power supplies are it.\n' +
            '\n' +
            'When searching for a power supply, keep your eyes on three crucial features: power output, rails, and efficiency. Other specifications and features are important, too, but these three directly affect the PSU’s performance.',
          'https://10scopes.com/wp-content/uploads/2020/08/what-is-my-power-supply-wattage.jpg'
        ),
      ],
      [],
      ['https://www.youtube.com/embed/lqThn3C-zg4'],
      [
        'https://www.techopedia.com/definition/1756/power-supply',
        'https://www.pcworld.com/article/456490/how-to-pick-the-best-pc-power-supply.html#:~:text=Many%20modern%20gaming%20systems%20with,if%20you%20plan%20on%20overclocking.',
        'https://10scopes.com/what-power-supply-do-i-have/',
      ]
    ),
  ],
  [
    '1,8',
    new SubsectionModel(
      'Graphics Card',
      [
        new ParagraphModel(
          'The Graphics Card',
          "A graphics card looks like a smaller version of the computer motherboard — it's a printed circuit board that has a processor, RAM, and other components. A graphics card is sometimes commonly referred to as a graphics processing unit, or GPU, but in reality the GPU is just a component (albeit the primary, defining component) of the graphics card.\n" +
            '\n' +
            'In fact, GPUs come in two major forms:\n' +
            '\n' +
            "An integrated GPU is built into the motherboard and cannot be upgraded or replaced. You'll find this in laptops and inexpensive desktop PCs. These graphics typically have modest performance and don't perform well for tasks like games or professional graphics production.  \n" +
            "A discrete GPU is mounted on a graphics card that slips into a computer's expansion slot on the motherboard. This kind of graphics card is replaceable so it can be upgraded as newer graphics cards are developed and helps keep a PC from becoming obsolete. ",
          'https://www.nvidia.com/content/dam/en-zz/Solutions/shop/1532541-gf-web-dmo-graphics-cards-3090-594x308.png'
        ),
        new ParagraphModel(
          'AMD and NVIDIA',
          'There are hundreds of graphics cards from dozens of manufacturers, but only two companies actually make the GPUs that power these components: Nvidia and AMD—although Intel\'s Xe Graphics could arrive this year. With its latest "Big Navi" RX 6000 cards, AMD is more competitive than it has been in years with Nvidia and its current-gen Ampere cards, like the GeForce RTX 3080, in general performance.\n' +
            '\n' +
            'That said, the realistically lit elephant in the room that we\'ve been ignoring thus-far is real-time ray tracing. Introduced as a major new feature with Nvidia\'s now previous-generation RTX 20-series cards, "Team Green" is now on its second generation RTX with 30-series GPUs. AMD ("Team Red") stepped into this game in a big way in 2020 with its RX 6000 cards, but it\'s still on its first go-round with real-time ray tracing, and so lags behind Nvidia on this front.',
          'https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-05-06-10-01/GPU_Power_Ladder__9_game_average_frame_rates__1440p__vs_RTX_2080_Ti.gif'
        ),
      ],
      [],
      ['https://www.youtube.com/embed/3p_AdODjL_w'],
      [
        'https://www.businessinsider.com/what-is-a-graphics-card',
        'https://www.tomshardware.com/reviews/gpu-buying-guide,5844.html',
      ]
    ),
  ],
  [
    '1,9',
    new SubsectionModel(
      'Peripherals',
      [
        new ParagraphModel(
          'What are Peripherals',
          "A peripheral device is an internal or external device that connects directly to a computer or other digital device but does not contribute to the computer's primary function, such as computing. It helps end users access and use the functionalities of a computer.\n" +
            '\n' +
            'Since it’s not a core device for the system, the computer can still function without the peripheral, which simply provides extra functions. However, some peripherals such as a mouse, keyboard, or monitor tend to be pretty much fundamental to the interaction between the user and the computer itself.\n' +
            '\n' +
            'A peripheral device is also called a peripheral, computer peripheral, input-output device, or I/O device.\n' +
            '\n'
        ),
        new ParagraphModel(
          'Choosing a Keyboard',
          'We work with keyboards more intimately and often than we do just about any other piece of computer hardware. And keyboards have different kinds of key mechanisms, called switches, that determine how typing on a keyboard feels to the user. That means that typing on different keyboards can be very different experiences.\n' +
            '\n' +
            'Specifically, keyboards have different tactile attributes – things like key travel, bottoming actions, responsiveness, and the amount of force required to register a key press – that all add up to distinct, subjective experiences. A keyboard that feels good to one person might feel terrible to another.\n' +
            '\n' +
            'There are many kinds of keyboard switches, but silicone dome, scissor, and mechanical switches are the most common. Each has its strengths and weaknesses, and we’ll cover each of them briefly. Note that there can be great variation between keyboards made using the same mechanisms, and so getting hands-on experience with a keyboard before purchasing can be helpful.',
          'https://resource.logitech.com/content/dam/logitech/en/products/keyboards/k120/gallery/k120-gallery-01-new.png'
        ),

        new ParagraphModel(
          'Choosing a Mouse',
          'While you’re considering whether to go wired or wireless, you’ll want to consider exactly how you want to use your mouse. As we mentioned above, if you’re going to be using your mouse for gaming, then you’ll want to include performance in your list of important specifications.\n' +
            '\n' +
            'Latency is one important performance consideration for gaming, where you’ll want the least latency possible. Also known as “input lag,” latency can be a killer, literally, in today’s fast-paced first-person shooter games. You don’t want to find yourself falling behind your competition, and latency can do just that, making you the tiniest bit slower on the trigger.\n' +
            '\n' +
            'Sensitivity is also an important mouse specification, and manufacturers define it as dots per inch (DPI). The higher the DPI, the less physical distance the mouse needs to move on a surface to register movement on-screen. For gamers, sensitivity can be particularly important. Some prefer high sensitivity that allows them to move quickly across a screen with smaller hand motions, while others prefer to move their hands in larger gestures without such a large on-screen impact.',
          'https://resource.logitechg.com/w_1000,c_limit,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/products/gaming/gaming-mice/g305-lightspeed-wireless-gaming-mouse/g304-g305-lightspeed-wireless-gaming-mouse21.png?v=1'
        ),
      ],
      [],
      [
        'https://www.youtube.com/embed/9S-U5f140-U',
        'https://www.youtube.com/embed/ar-HKYkWlvw',
      ],
      [
        'https://www.techopedia.com/definition/2252/peripheral-device',
        'https://www.newegg.com/insider/how-to-choose-a-keyboard/',
        'https://www.newegg.com/insider/how-to-choose-a-mouse/',
      ],
      true
    ),
  ],

  [
    '2,1',
    new SubsectionModel(
      'Prices',
      [
        new ParagraphModel(
          'Current Price Changes',
          "Costs are on the rise for several types of PC components, including memory chips and LCD screens. While that's a concern for procurement managers at PC makers such as Dell Inc. and Hewlett-Packard Co., users should have little to fear, analysts said.\n" +
            '\n' +
            'Prices for PCs remain on their traditional downward spiral, and little is going to change that, said Bryan Ma, a computer industry analyst at market research company IDC in Singapore.\n' +
            '\n' +
            'The average price of a desktop PC fell to $847 in the first quarter of 2005, from $1,022 in 2002, according to IDC. For notebooks, the average price dropped to $1,340 from $1,644. The figures include all types of PCs, from high-end systems for gamers to low-end PCs aimed at emerging markets.',
          'https://www.techspot.com/images2/news/bigimage/2021/08/2021-08-30-image.png'
        ),
        new ParagraphModel(
          'Recommendation: Prices With PC PartPicker',
          'PCPartPicker Price Trends are daily generated graphs showing historical price information for several product types. Thousands of components are grouped into logical categories and combined with price data. The data is analyzed and presented as an intensity graph of price distributions with minimum, maximum, and average price trends.\n' +
            '\n' +
            'With price trend graphs, you can easily keep track of price patterns.'
        ),
      ],
      [],
      [
        'https://www.youtube.com/embed/75L8Hrb49A4',
        'https://www.youtube.com/embed/ubb0PChInMM',
      ],
      [
        'https://pcpartpicker.com/trends/',
        'https://www.computerworld.com/article/2557703/component-costs-rising--but-pc-prices-won-t.html',
      ],
      false,
      false,
      false,
      true,
      9
    ),
  ],
  [
    '2,2',
    new SubsectionModel(
      'Stores',
      [
        new ParagraphModel(
          'Places To Buy: USA',
          'NewEgg.com\n' +
            'Micro Center\n' +
            'TigerDirect.com\n' +
            'Crucial.com\n' +
            'Frys.com\n' +
            'Amazon and eBay'
        ),
        new ParagraphModel(
          'Places To Buy: Brasil',
          'Kabum.com\n' + 'Pichau.com\n' + 'Terabyteshop.com\n'
        ),
      ],
      [],
      ['https://www.youtube.com/embed/IAu4Y28arVU'],
      [
        'https://www.online-tech-tips.com/gadgets/the-best-websites-for-buying-computer-parts-online/',
      ]
    ),
  ],
  [
    '2,3',
    new SubsectionModel(
      'Tips',
      [
        new ParagraphModel(
          'Tips List from SupaZT r/buildapc',
          "Plan ahead so there aren't future headaches. Make sure the parts will fit and that you have all the necessary cables.\n" +
            "There's no such thing as 'future proofing'... I think a better phrase would be \"future resistant\". The order I would build a future resistant computer is this: PSU, Case, Storage. Everything else gets outdated fast.\n" +
            "Microcenter is your best friend (especially for CPU's). Keep in mind Bestbuy or Staples might be able to pricematch Microcenter's prices. If you don't live by a microcenter there's Amazon, Newegg, and PCPartpicker.\n" +
            "You probably won't need a 1000W PSU, $300 mobo, or even SLI.\n" +
            "Don't cheap out on PSU's. It can be the most important part in a build. [Corsair, Seasonic, EVGA, XFX are notable brands.]\n" +
            "Don't buy a PSU with a 220/110V switch. It means it won't have Power Factor Correction too! If you do have one make sure it's set to 110V if you're in the USA.\n" +
            "Buying a case too large for their needs. These days you can fit 6 HDD's into ITX cases. It depends on your needs though.\n" +
            'Installing too many fans. A few large fans can move as much air as speedy, loud small ones.\n' +
            'Slowly collecting parts. What if one of the parts that is sitting there idly is defective and the 30-day return / replacement is now obsolete?\n' +
            "Don't buy a $500 single graphic card or run two cards in SLI and then only plan to use it on one small resolution monitor\n" +
            "Don't buy a triple channel ram kit and pair it with a dual channel motherboard.\n" +
            "An i7 is only necessary if you're utitlizing programs that can take advantage of it's features. (Hyper-Threading, Multi-Cores, etc). If you're only gaming with no intention of utilizing those programs stick with the i5.\n" +
            'Make sure the RAM/Motherboard (pins) are compatible as well as the CPU/Motherboard (socket). This information is usually found online or in the manual.\n' +
            'Does your PSU have a 4 pin 12v connector for your CPU? Or 8 pin?\n' +
            'Do not trust power supply calculators from manufacturer websites!\n' +
            "If you're not going to play games or perform video/CUDA programming, on-board video is fine. The card will just create extra noise you don't want even when it's idle because it still generates heat that will cause other fans to spin faster.\n" +
            "You don't need a 'k' series CPU, a Z Chipset, or an aftermarket cooler/heatsink(although this could make it quieter) if you're NOT overclocking. Alternatively you could use a Xeon if not overclocking.\n" +
            'Buying an Optical Drive is usually not needed anymore. Everything can be done with a flash drive these days. Another option: External dvd drive.\n' +
            "I personally suggest getting a SSD. They're amazing. Minimum 120GB. If not, get a 1TB HDD and grab an SSD later.\n" +
            'Most people are perfectly fine with on-board audio these days. A DAC/AMP would serve you better than a soundcard anyways.\n' +
            'Verify if your CPU heatsink needs a mount underneath the motherboard.\n' +
            'Verify if your video card requires two separate power cables or not and that you have the correct cables coming from your PSU.\n' +
            'If you have a case with front usb 3 ports make sure your motherboard has a usb 3.0 on-board header\n' +
            'If you use an ssd or plan to add one, make sure your morherboard has a 6gbps sata port',
          'https://shopinfo.vteximg.com.br/arquivos/ids/1277374-1000-1000/1.png?v=637720121597100000'
        ),
      ],
      [],
      ['https://www.youtube.com/embed/j_DcWgxMZ3k'],
      [
        'https://www.reddit.com/r/buildapc/comments/1yg8xg/dos_donts_and_tips_for_first_time_bulders/',
      ],
      true
    ),
  ],

  [
    '3,1',
    new SubsectionModel(
      'Motherboard',
      [
        new ParagraphModel(
          'Installing IO Shield',
          'To figure out the direction your IO shield should go, you need to know where it will sit on the motherboard. Once you know, start lining up the IO shield with the motherboard. You need to get it as close to perfect as possible. It may help to get a second set of hands to keep it steady. \n Now you can finally start to install the IO shield. First, place your CPU’s case horizontally and slide the IO shield into place.\n' +
            '\n' +
            'You will have to apply force to the corner of the IO shield, but don’t push too hard so as to not bend anything. Then, apply force to the opposite lower corner to get it to snap into place. You should hear a clicking sound if it goes in correctly.\n' +
            '\n' +
            'Remember that the bumps on the shield need to be above the metal brace of the case. If you don’t have them aligned there, you will never hear the clicking sound.',
          'https://external-preview.redd.it/1871ebaPM1ODhs18Rv_zWu-Un5vVJUqkPcwDD6LkFTA.png?auto=webp&s=b0918a34527fe627a3683cd899903a960a905f47'
        ),
        new ParagraphModel(
          'Installing The Motherboard',
          'Once done, you need to hover the motherboard inside the case to figure out where the standoffs are located. Some PC cases will have pre-installed standoffs, but you may have to manually install them depending on your case.\n' +
            'The placement of these standoffs will depend on the size of the board itself. It’s also important to make sure your PC case is compatible and is big enough to accommodate the motherboard of your choice.\n' +
            'A motherboard standoff hole being highlighted \n' +
            '\n' +
            'After locating the standoffs, place your motherboard inside the case and align the standoffs properly.\n' +
            'The next step is to screw the motherboard down. You’ll follow an ‘X’ pattern to do the screws, meaning you’ll work the screw that’s diagonally opposite to the one that you tightened first.\n' +
            'Be wary of the amount of force applied while screwing down the board. The main idea is to secure the board inside the case, not overtighten them.\n' +
            'You have successfully placed the motherboard inside the case now, but we still have a couple of things to do.\n' +
            'Port to connect the ATX cable on the motherboard\n' +
            '\n' +
            'After that, you have to connect the main ATX power cable, and the CPU power leads. These two cables will make sure the board is able to supply power to the components.\n' +
            'Almost all cables and the corresponding ports and leads are marked with their names, so you shouldn’t have any issues figuring out which cable goes where. If not, you’ll have to refer to the motherboard manual to find appropriate leads.',
          'https://linustechtips.com/uploads/monthly_2018_08/39083428_312369319335287_3234019453725310976_n.jpg.eebefe49c967e8a07946d79e99b610c2.jpg'
        ),
      ],
      [],
      [
        'https://www.youtube.com/embed/XAWNzd-gc3Q',
        'https://www.youtube.com/embed/hrv7_gl4MAQ',
      ],
      [
        'https://www.onecomputerguy.com/how-to-install-io-shield/',
        'https://www.xda-developers.com/how-to-install-motherboard/',
      ],
      false,
      false,
      false,
      true,
      3
    ),
  ],
  [
    '3,2',
    new SubsectionModel(
      'CPU',
      [
        new ParagraphModel(
          'Line Up the CPU',
          'Your CPU has to go into its socket on the motherboard facing the right direction. Fortunately, there are almost always indicators on the CPU and socket to help you get the alignment correct.\n' +
            '\n' +
            "Look for a matching indicator on the corner of your CPU and the socket. It will likely appear as a small triangle. If you don't see any indicator, you should consult the manuals for your motherboard and CPU. ",
          'https://finalprojecte.readthedocs.io/en/latest/_images/CPUpicture.png'
        ),
        new ParagraphModel(
          'Install the CPU',
          "Assuming you correctly lined up your CPU with the socket, it should drop right into place. You may need to gently, and we mean gently, shift it around if it feels like it's not quite in place. AMD CPU pins, for instance, can be a little trickier to line up with the holes in the socket.\n With your CPU properly seated in the socket, you should be able to push down the retention arm with ease (if it's an Intel CPU, lower the bracket first). If it feels like the retention arm is resisting you, double-check the seating of the CPU in the socket. We find a gentle push with your pinky finger can be enough force to close the retention arm, so don't try to force it or you may end up damaging your CPU (We've bent CPU pins that way, and it is NOT fun trying to bend them back). "
        ),
      ],
      [],
      ['https://www.youtube.com/embed/_zojIW-2DD8'],
      ['https://www.techradar.com/how-to/how-to-install-a-cpu']
    ),
  ],
  [
    '3,3',
    new SubsectionModel(
      'Memory',
      [
        new ParagraphModel(
          'Installing RAM',

          "Once you know where your RAM needs to go, you're ready to start installing. Each RAM slot will have two small clips at either side. Press these down to open them. They don't need to move very far, so don't use too much force." +
            'RAM sticks are keyed, which means they have a gap in the connector that will ensure you can only insert them one way. Line up your RAM so that the gap on the connector corresponds with the RAM slot. ' +
            "With your RAM lined up, gently press it down into the slot. When the RAM stick is fully depressed, the locking tabs at each side should click back into place. Once they have, you're all set.\n" +
            '\n',
          'https://guide-images.cdn.ifixit.com/igi/guM3moQdMOGNRuCL.medium'
        ),
      ],
      [],
      ['https://www.youtube.com/embed/VA-eGIitpsw'],
      ['https://www.techradar.com/how-to/how-to-install-ram']
    ),
  ],
  [
    '3,4',
    new SubsectionModel(
      'Cooler',
      [
        new ParagraphModel(
          'Apply Thermal Paste',
          "our CPU cooler doesn't go straight onto your CPU. There should be a thin layer of a thermal compound that eliminates any gaps between the CPU lid and the base of your CPU cooler. Some coolers come with a thermal paste already applied, so check the bottom of your coolr or the manual to see if it has pre-applied thermal paste. \n" +
            '\n' +
            "If your cooler has pre-applied thermal paste, you're ready to go. DO NOT apply a second layer of thermal paste.\n" +
            '\n' +
            "If your cooler doesn't already have thermal paste on it, apply thermal paste to the top of your CPU lid. You should only apply a small amount, though there are many schools of thought on how you should apply it. You can simply put a small dot, no bigger than a pea, in the center of your CPU lid. ",
          'https://cpuninja.com/wp-content/uploads/2021/07/How-To-Apply-Thermal-Paste-To-A-CPU.jpg'
        ),
        new ParagraphModel(
          'Install Cooler',
          "Take your cooler and hold it over the CPU, carefully lining up the screws (or whatever type of connector it uses) with the holes in your motherboard or the standoffs you installed earlier. Lower the cooler onto the CPU. (Note: You may need to remove fans from your cooler while attaching your cooler, though it's not necessary for all coolers.) \nWith the CPU cooler in place, screw in (or push in) the connectors using an X pattern. Tighten loosely first, then increase tension with each pass without putting to much muscle into it. Do not go around the CPU in a square, as this can create uneven pressure across the processor and may impact cooling.\n" +
            '\nIf you removed any fans from your cooler earlier or still have some to install, you can attach them to your cooler now. How they connect will depend on the fans and your cooler, so consult your manual.\n' +
            '\n' +
            "If you're using a water cooler, you'll need to connect the radiator, any coolant reservoirs, and the water pump to one another.",
          'https://www.xda-developers.com/files/2021/12/How-to-install-a-CPU-cooler-2-1024x683.jpg'
        ),
      ],
      [],
      [
        'https://www.youtube.com/embed/aqEHnt32K98',
        'https://www.youtube.com/embed/9Ky1PlSe9KU',
      ],
      [
        'https://www.techradar.com/how-to/how-to-install-a-cpu-cooler-keeping-your-processor-chill',
      ]
    ),
  ],
  [
    '3,5',
    new SubsectionModel(
      'PSU',
      [
        new ParagraphModel(
          'Installing Into Case',
          'Start off by making sure all the cables you need are attached to the PSU, especially if you have a modular or semi-modular unit. The essentials are the 24-pin motherboard power connector, one 8-pin CPU power connector, and as many GPU/PCIe connectors as your graphics card needs. You may also need one or more SATA power cables, for internal storage or to power certain CPU coolers.\n' +
            '\n' +
            'A  modular PC PSU, out of its case, with several cables connected to it.\n' +
            'This is a modular PSU, with fully removable cables.\n' +
            'With the PSU fan facing downwards, slide it into the case’s PSU bay. This is usually at the back and in the floor of the case, except for very cheap or old cases that have it at the top.',
          'https://www.corsair.com/corsairmedia/sys_master/productcontent/blog_how-to-build-a-pc-psu-fans-and-cable-routing-Content-2.png'
        ),
        new ParagraphModel(
          'Connecting Cables',
          'It’s cable connectin’ time. There’s no particular order, but trying to avoid criss-crossing the cables will help you organise them later. Be sure to make use of any routing holes around the motherboard tray, too.\n' +
            '\n' +
            'The big 24-pin cable connects directly to the motherboard – it’s hard to miss that one, but should almost always be on the board’s right edge – while the 8-pin CPU power cable plugs in at the top-left of the mobo. Some higher-end motherboards might have a secondary CPU power connector, but this is only really for extreme overclocking use, and your system will work fine if you only connect the primary connector. That said, graphics cards with multiple PSU connectors will always need all of them filled.\n' +
            '\n' +
            'A close-up of the CPU power connectors on the edge of a motherboard.\n' +
            "In this case (hahhhh) we're only connecting the main, 8-pin CPU power connector on the right.\n" +
            'Remember the SATA power connectors as well (the ones shaped like a stretched-out ‘L’). These can plug directly into hard drives or SATA SSDs; some CPU coolers will also have SATA power connector, either as part of a hub unit or on a separate cable.',
          'https://ae01.alicdn.com/kf/H13b583e1ee0b4a5a99c5ff2df7f71929f/Formulamod-asus-seasonic-antec-totalmente-modular-kit-de-cabo-psu-18awg-mangas-compridas-fm-bzxz-por.jpg'
        ),
      ],
      [],
      ['https://www.youtube.com/embed/-Z77LpU3oUg'],
      ['https://www.rockpapershotgun.com/how-to-install-a-psu']
    ),
  ],
  [
    '3,6',
    new SubsectionModel(
      'HD and SSD',
      [
        new ParagraphModel(
          'Installing Hard Drive',
          'Physically mounting the hard drive in a PC is probably the most difficult part of the installation process.\n' +
            '\n' +
            'Securing the drive to a cage usually requires four screws on the sides or bottom of the drive. Many cases—especially enthusiast cases—use tool-less trays that hold the drives with simple pins and clips.\n' +
            '\n' +
            'Some cases come with tool-less brackets that make mounting hard drives really easy. However, these brackets are often less secure than traditional screws.\n' +
            '\n' +
            'Using screws is the more robust mounting method, but tool-less trays are fine for systems that won’t be moved around much.\n' +
            '\n' +
            'This hard drive is flipped upside-down to show its parts. Seven of the 10 screw holes are circled in red, while SATA power and data connections are circled in blue and green, respectively.\n' +
            '\n' +
            'Drives last longer when they stay nice and cool. When mounting drives in a system, try to leave as much space between them as possible to maximize airflow over the tops and bottoms. Positioning the drives directly in front of an intake fan also helps.' +
            '\nOnce the drive is mounted, connecting it to your system is quick and easy.\n' +
            '\n' +
            'Virtually all new desktop hard drives sold today use the SATA interface (unless you’re dealing with servers). SATA uses simple cables that are keyed to fit on the drive and motherboard connector one way.\n' +
            '\n' +
            'Connect one end of the SATA cable to the drive, and the other end to an available SATA port on your motherboard, and you’re halfway there.',
          'https://getprostorage.com/wp-content/uploads/2016/05/installingaharddrive.jpg'
        ),
        new ParagraphModel(
          'Installing Solid State Drive',
          'The bigger but generally more affordable breed of SSD needs three things: a power cable, a SATA cable, and somewhere to sit inside your PC. Cable management will be easier if the drive is already in place, so start by locating one of your PC’s 2.5in mounts. Large 3.5in drive bays usually have mounting holes for fitting a 2.5in drive as well, or there might be dedicated 2.5in mounts attached to the case’s interior chassis. Some cheaper cases also have mounting holes drilled directly into the chassis.\n' +
            '\n' +
            'A 2.5in storage drive mounting bracket, removed from the PC case it was installed in.\n' +
            'A removable mounting bracket like this one makes installation easier.\n' +
            'It’s a little easier, however, if you have removeable mounts available, as these will let you do the fiddly screwdriver work mostly outside of the case. That’s right, you’ll need a crosshead screwdriver to both remove the mount and affix it to the SSD, before re-installing both to the case.\n' +
            '\n' +
            'First, locate the screws – these are very small, and will have come with the case. If you’ve misplaced yours, it’s easy enough to buy replacement screws online, as all SSDs have the same size holes. Place the drive in the mount with the holes aligned, then securely fasten the screws. Replace the mount, if it’s a removable one.\n' +
            '\n' +
            'A small screw being inserted into a 2.5in SSD mount, so that it and the drive can be fastened together.\n' +
            'Some mounting brackets secure the SSD from the underside, others from the edges.\n' +
            'With the SSD in position, you can now attach the power and data cables; these come included with your PSU and motherboard respectively. They also both use distinctive L-shaped connectors, with the power cable being the wider of the two. Plug this into the SSD, and do the same with the SATA cable, which connects right next to it. Plug the other end of the SATA cable into a spare SATA port on your motherboard, which are normally found near the bottom-right corner.\n' +
            '\n',
          'https://images.idgesg.net/images/article/2021/02/install-sata-ssd-in-pc-data-and-power-cables-100878676-large.jpg?auto=webp&quality=85,70'
        ),
      ],
      [],
      ['https://www.youtube.com/embed/vXpAsf7SJ3M'],
      [
        'https://www.pcworld.com/article/535852/how-to-install-a-new-hard-drive-in-your-desktop-pc.html',
        'https://www.crucial.com/articles/about-ssd/how-to-install-solid-state-drive',
      ]
    ),
  ],
  [
    '3,7',
    new SubsectionModel(
      'Graphics Card',
      [
        new ParagraphModel(
          'Installation of GPU',
          'Installing a graphics card is a straightforward process that requires three things: a new graphics card, your computer, and a Phillips-head screw driver. Be sure to turn off your PC and unplug it from the wall before you begin.\n' +
            '\n' +
            'motherboard pcie lanesBrad Chacos/IDG\n' +
            'You install a graphics card into a PCI-E x16 slot on your computer’s motherboard (the long, black slots in this picture.)\n' +
            '\n' +
            'Unless you need to remove an existing GPU, you first need to locate the long PCI-E x16 slot closest to the heat sink of your processor. This will either be the first or second expansion slot on your motherboard.\n' +
            '\n' +
            'Make sure that there are no loose wires blocking your access to this slot. If you’re replacing an existing graphics card, unplug any cables connected to it, remove the screw from its retention bracket on the rear interior of your PC case, and then remove the card. Most motherboards also have a small plastic latch on the end of the PCI-E slot that locks the graphics card in place. Make sure you toggle this latch to unlock your old graphics card so you can remove it.\n' +
            '\n' +
            'gpu install 4 of 7Thomas Ryan\n' +
            'Don’t forget to lock the latch at the end of the PCI-E slot after firmly inserting your graphics card!\n' +
            '\n' +
            'You can now install your new graphics card into the open and unobstructed PCI-E x16 slot. Firmly insert the card into the slot, then push down the plastic lock on the end of the PCI-E slot to hold it in place. Next, use a screw to secure the graphic card’s metal retention bracket to your PC’s case. You can reuse the same screw(s) that held the cover bracket or your former graphics card in place.\n' +
            '\n' +
            'gpu install 7 of 7Thomas Ryan\n' +
            'She needs more power, Captain! Your graphics card won’t run unless you’ve connected it to your PSU.\n' +
            '\n' +
            'Most gaming-level graphics cards require additional power connectors. If yours does, make sure you connect those PCI-E power cables. Your graphics card will not function correctly without properly supplied power. In fact, if you don’t connect those PCI-E power cables your PC may be unable to boot.\n' +
            '\n',
          'https://www.pcworld.com/wp-content/uploads/2021/09/dsc01148-100863588-orig.jpg?quality=50&strip=all&w=1024'
        ),
      ],
      [],
      ['https://www.youtube.com/embed/nyDxrTHDjXQ'],
      [
        'https://www.pcworld.com/article/427082/how-to-install-a-graphics-card.html',
      ],
      true
    ),
  ],

  [
    '4,1',
    new SubsectionModel(
      'Windows',
      [
        new ParagraphModel(
          'Installtion - Bootable USB',
          "Create USB installation media. Visit Microsoft's Windows 10 download page and select “Download tool now” under the “create Windows 10 installation media” section. Transfer the downloaded installer tool to a USB drive.\n" +
            'Use your installation media. Insert your installation media into your device and then access the computer’s BIOS or UEFI. These are the systems that allow you to control your computer’s core hardware. \n' +
            '\n' +
            "The process of accessing these systems is unique to each device, but the manufacturer’s website should be able to give you a helping hand here. Generally, you'll need to press the F2, F12 or Delete keys as your computer boots up.",
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Windows_10_Logo.svg/1024px-Windows_10_Logo.svg.png'
        ),
        new ParagraphModel(
          'Installation - Boot Order',
          'Once you have access to your computer’s BIOS/UEFI you’ll need to locate the settings for boot order. You need the Windows 10 installation tool to be higher up on the list than the device’s current current boot drive: this is the SSD or HDD that your existing OS is stored on. You should move the drive with the installer files to the very top of the boot order menu. Now, when you restart your device the Windows 10 installer should load up first. '
        ),
      ],
      [],
      ['https://www.youtube.com/embed/v_Z2OBf0yVs'],
      ['https://www.tomsguide.com/how-to/how-to-install-windows-10'],
      false,
      false,
      false,
      true,
      7
    ),
  ],
  [
    '4,2',
    new SubsectionModel(
      'Linux',
      [
        new ParagraphModel(
          'Choosing a Distro',
          'Choosing a Linux distribution is a personal thing. It greatly depends on what you want to do with it.\n' +
            '\n' +
            'Ubuntu and Linux Mint : Suitable for – Beginner to Advanced/Server\n' +
            'Ubuntu is currently the most popular of the Linux Distributions. It is built on a Debian core, but has a more regular release cycle, is more polished, is easy to use and has major financial backing. It is a completely free distro, therefore copyrighted materials such as DVD playing software do not come as standard with Ubuntu, you must download and install it separately, but can be done easily. If you don’t like the look and feel of the latest Ubuntu desktop (called Unity), Linux Mint is based on Ubuntu, is made for beginners and still offers a GNOME or KDE version.\n' +
            '\n' +
            'Red Hat/CentOS/Fedora : Suitable for – Beginner to Advanced/Server\n' +
            'Used to be very popular, easy to use, good installer. Has some annoying quirks, RPM software packaging can suffer from dependency problems, even with YUM system. RHEL (Red Hat Enterprise Linux) is the non-free Enterprise version offering of this distribution, it comes with full telephone based support and is backed by rigorous testing. CentOS is the free version which is derived from RHEL but usually trails behind it and of course does not come with enterprise support, then there is Fedora Core. Fedora is the bleeding-edge fork of Red Hat which has all the latest bells and whistles but as it is bleeding-edge, it can also suffer from less stability than their enterprise-grade counterparts.' +
            '\n\nDebian : Suitable for – Intermediate to Advanced Users\n' +
            'Very established Linux distro. DEB packages combined with apt-get system solve the tedium of the RPM software packaging in Redhat/Suse/Mandriva. Traditionally known for being further behind than some other distros, but rock solid. Is now the basis for many modern, easier to use distributions such as Ubuntu and Linux Mint',
          'https://cdn.picpng.com/linux/linux-unix-tux-penguin-cute-43298.png'
        ),
        new ParagraphModel(
          'Installation',
          'With a bootable Ubuntu USB stick, you can:\n' +
            '\n' +
            'Install or upgrade Ubuntu\n' +
            'Test out the Ubuntu desktop experience without touching your PC configuration\n' +
            'Boot into Ubuntu on a borrowed machine or from an internet cafe\n' +
            'Use tools installed by default on the USB stick to repair or fix a broken configuration\n' +
            'This tutorial will show you how to create a bootable USB stick on Microsoft Windows using Rufus.\n' +
            '\n' +
            'For most users we recommend balenaEtcher instead of Rufus which is simpler to use and also available on MacOS and Ubuntu. Instructions are now included in the primary Install Ubuntu Desktop tutorial.\n' +
            '\n' +
            'Creating a bootable Ubuntu USB stick from Microsoft Windows is very simple and we’re going to cover the process in the next few steps.\n' +
            '\n' +
            'https://ubuntu.com/tutorials/create-a-usb-stick-on-windows#1-overview'
        ),
      ],
      [],
      ['https://www.youtube.com/embed/_Ua-d9OeUOg'],
      [
        'https://www.geeksforgeeks.org/linux-distribution-shall-choose/',
        'https://ubuntu.com/tutorials/create-a-usb-stick-on-windows#1-overview',
      ]
    ),
  ],
  [
    '4,3',
    new SubsectionModel(
      'Drivers',
      [
        new ParagraphModel(
          'What are Drivers',
          'To understand how drivers work, imagine trying to stream a Netflix show on your computer. When you play the video on your browser, the application sends your command request to your OS. \n' +
            '\n' +
            'Then, the OS must send out requests to other components of your computer that will help you execute commands so you can watch the show. The OS will ask the network card to buffer the video, send the correct commands to the graphics card to display the video, and communicate with the sound card to play the audio in the video. \n' +
            '\n' +
            'The OS sends all of these requests to the drivers associated with the required devices, and each device’s driver will know exactly what to do. So, for example, the network card driver knows what data to transfer, the video card will know what to display, and the sound card will know what sound to play. ',
          'https://www.drivermax.es/wp-content/uploads/2015/11/drivermax_value1.png'
        ),
        new ParagraphModel(
          'Installing Drivers',
          'To download new drivers, go to PC manufacturer’s website or device manufacturer’s website. Driver updates are often available in the Support section of their website. If you are using a branded computer, it is recommended that you go to the PC manufacturer’s website to check for the latest driver first, as they may customize the driver. You are required to use the PC model and the operating system that you are using to download the correct driver. Usually, the PC model can be found on the machine. See How to Get Operating System. If you need to download the driver from device manufacturer, then you are required to know the device model.'
        ),
      ],
      [],
      ['https://www.youtube.com/embed/RYYoCXh2gtw'],
      [
        "https://www.online-tech-tips.com/computer-tips/what-are-pc-drivers-and-why-do-you-need-them/#:~:text=As%20mentioned%20before%2C%20drivers%20are,hardware%20wouldn't%20work%20together.",
        'https://www.drivereasy.com/knowledge/how-to-install-drivers/',
      ],
      false,
      true
    ),
  ],
]);
