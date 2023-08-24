import RootLayout from "@/app/layout";
import { useState, useEffect, use } from "react";
import { getLatest } from "@/services/movie-service";

export default function Home() {
  const [movie, setMovie] = useState();


  useEffect( () => {
    const movie = getLatest();
    console.log( movie);
    
  }, []);

  return (
    <RootLayout>
      {console.log(movie)}
      <h1>Hello Next</h1>
    </RootLayout>
  )
}