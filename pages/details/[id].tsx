import { useRouter } from 'next/router';
import Detail from '@/components/Details';
import RootLayout from '@/app/layout';


export default function MovieDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const movieId = parseInt(id as string, 10);

  if (!id) {
    return <div>Paramètre d'URL manquant</div>;
  }

  if (isNaN(movieId)) {
    return <div>Paramètre d'URL invalide</div>;
  }


  return (
    <RootLayout>
      <Detail movieId={movieId}/>
    </RootLayout>
  );
}
