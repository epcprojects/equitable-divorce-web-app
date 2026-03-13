"use client"
import {  DivorceCard, FillingCard, MarriageCard, Spouseinfocard, ThemeButton, Yourinfocard } from '@/app/components';

export default function YourinfoPage() {
  
  return (
   <main>
    <section> 
        <Yourinfocard/>
        <Spouseinfocard/>
        <MarriageCard/>
        <FillingCard/>
        <DivorceCard/>
    </section>
   </main>
  )
}
