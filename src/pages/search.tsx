import Layout from '../app/layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'CSH Constitution',
    authors: [{ name: "Computer Science House" }],
    icons: {
        icon: 'https://assets.csh.rit.edu/pubsite/csh_logo_square.svg',
    }
}

export default function Search() {
    return <Layout><h1 className="text-center">Search Page</h1></Layout>;
}