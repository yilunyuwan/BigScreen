import React, {useEffect, useState} from 'react';
import './home.scss';
import {getLocalTime} from '../lib/getLocalTime';
import {PerformanceCounting} from '../components/PerformanceCounting';
import {initPageSize} from '../lib/initPageSize';
import {Ranking} from '../components/Ranking';
import {FansInterests} from '../components/FansIntersets';
import {LiveBroadcastPeriod} from '../components/LiveBroadcastPeriod';
import {Memorabilia} from '../components/Memorabilia';
import {LocationDistribution} from '../components/LocationDistribution';
import {GenderAgeDistribution} from '../components/GenderAgeDistribution/GenderAgeDistribution';
import {FansTrends} from '../components/FansTrends';
import {FavoriteSong} from '../components/FavoriteSong';
import {FansMeeting} from '../components/FansMeeting';

export const Home = () => {
  const [localTime, setLocalTime] = useState(getLocalTime());
  useEffect(() =>{
    const id =  setInterval(() => {
      setLocalTime(getLocalTime());
    }, 1000);
    window.addEventListener('resize', initPageSize)
    return () => {
      clearInterval(id)
      window.removeEventListener('resize', initPageSize)
    }
  },[])

  const timeString = localTime.pop();
  const dateString = localTime.join(' ');
  return (
    <div className="home">
      <header className="bordered">
        <div className="owner">叉叉应援会</div>
        <h1>叉叉资讯概览</h1>
        <div className="clock">
          <div className="date">{dateString}</div>
          <div className="time">{timeString}</div>
        </div>
      </header>
      <main>
        <section className="section1">
          <PerformanceCounting/>
          <Ranking/>
        </section>
        <section className="section2">
          <FansInterests/>
          <LiveBroadcastPeriod/>
        </section>
        <section className="section3">
          <Memorabilia/>
        </section>
        <section className="section4">
          <LocationDistribution/>
          <FansMeeting/>
        </section>
        <section className="section5">
          <FansTrends/>
          <FavoriteSong/>
          <GenderAgeDistribution/>
        </section>
      </main>
      <footer className="bordered">
        &copy; 花枝丸 2021-{dateString.slice(0,4)}
      </footer>
    </div>
  );
};
