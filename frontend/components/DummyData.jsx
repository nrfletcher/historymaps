export default function DummyData() {
    const [markers, setMarkers] = useState([
        { id: 1, 
          pos: {lat: -13.906519877130052, lng:  -59.984371304197275},
          img: 'battle',
          title: 'Battle of Waterloo',
          date: '18 June, 1815',
          year: 1815,
          desc: 'The Battle of Waterloo, fought on June 18, 1815, was a pivotal event in European history that marked the end of the Napoleonic era and Napoleon Bonaparte\'s military ambitions. It took place near the town of Waterloo in present-day Belgium. The battle was a culmination of Napoleon\'s attempt to regain power after his earlier exile to the island of Elba.',
          wiki: 'https://en.wikipedia.org/wiki/Battle_of_Waterloo', 
          isOpen: false,
        },
        { id: 2, 
          pos: {lat: -14.906519877130052, lng:  -57.984371304197275},
          img: 'cultural',
          title: 'Battle of Waterloo',
          date: '18 June, 1835',
          year: 1835,
          desc: 'The Battle of Waterloo, fought on June 18, 1815, was a pivotal event in European history that marked the end of the Napoleonic era and Napoleon Bonaparte\'s military ambitions. It took place near the town of Waterloo in present-day Belgium. The battle was a culmination of Napoleon\'s attempt to regain power after his earlier exile to the island of Elba.',
          wiki: 'https://en.wikipedia.org/wiki/Battle_of_Waterloo', 
          isOpen: false,
        }
        ,
        { id: 3, 
          pos: {lat: -18.906519877130052, lng:  -52.984371304197275},
          img: 'birth',
          title: 'Battle of Waterloo',
          date: '18 June, 1825',
          year: 1825,
          desc: 'The Battle of Waterloo, fought on June 18, 1815, was a pivotal event in European history that marked the end of the Napoleonic era and Napoleon Bonaparte\'s military ambitions. It took place near the town of Waterloo in present-day Belgium. The battle was a culmination of Napoleon\'s attempt to regain power after his earlier exile to the island of Elba.',
          wiki: 'https://en.wikipedia.org/wiki/Battle_of_Waterloo', 
          isOpen: false,
        }
      ]);

      return markers;
}