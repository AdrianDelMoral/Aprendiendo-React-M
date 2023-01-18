import React from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    {
        userName: 'iFullSt',
        name: '4DR1',
        isFollowing: false,
        uuid:'1'
    },
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true,
        uuid:'2'
    },
    {
        userName: 'marianocodes',
        name: 'Mariano Álvarez',
        isFollowing: false,
        uuid:'3'
    },
    {
        userName: 'shiroi_okami96',
        name: 'Gus',
        isFollowing: true,
        uuid:'4'
    }
]

export function App() {
    return (
        <section className="App">
            {
                users.map(({uuid, userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={uuid}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
                )
            }
        </section>
    )
}