import Image from 'next/image'

// export async function getStaticProps() {
//   // const mp3FolderPath = path.join(process.cwd(), 'public', 'mp3');
//   const csvFilePath = path.join(process.cwd(), 'audio', 'audioList.csv');
//   console.log(csvFilePath);

//   try {
//     const csvContent = await fs.readFile(csvFilePath, 'utf8');
//     const mp3List = await new Promise((resolve, reject) => {
//       csvParse(csvContent, { columns: true }, (err, data) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(data);
//         }
//       });
//     });

//     return {
//       props: {
//         mp3List,
//       },
//     };
//   } catch (error) {
//     console.error('Error reading CSV file:', error);
//     return {
//       props: {
//         mp3List: [],
//       },
//     };
//   }
// }

export default function Home() {
  // const [selectedMp3, setSelectedMp3] = useState(null);
  // const playAudio = (mp3FileName) => {
  //   setSelectedMp3(mp3FileName);
  // };

  return (
    <div>
      <h1>MP3 Player</h1>
    </div>
  );
}
