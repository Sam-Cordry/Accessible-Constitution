import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CSH Constitution',
  authors: [{ name: "Computer Science House" }],
  icons: {
    icon: 'https://assets.csh.rit.edu/pubsite/csh_logo_square.svg',
  }
}

export default function Home() {
  return (
    <div>
        <h1 className='text-center font-bold mt-5 text-xl'>Welcome to the CSH Constitution!</h1>
        <p className='max-w-20 mt-5 mx-2 px-24'>
          This is the official Constitution for Computer Science House.
          With several accessibility options, pretty much anyone should be able to use it in a way that suits them.
          The different tabs are listed below:
        </p>
        <br />
        <ul className="pl-32 list-disc">
            <li><strong>Text:</strong> Allows you to change the font type of the Constitution on the fly to suit your needs.</li>
            <li><strong>Audio:</strong> Allows you to listen to recordings of an AI voice reading the Constitution.</li>
            <li><strong>Search:</strong> Find a section of the Constitution based on search terms instead of looking through the entire thing.</li>
        </ul>
    </div>
  );
}
