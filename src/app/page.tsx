import Home from '@/components/Sections/Home';
import Experiences from '@/components/Sections/Experiences';
import Projects from '@/components/Sections/Projects';
import Contacts from '@/components/Sections/Contacts';

export default function Page() {
  return (
      <main>
          <Home/>
          <Experiences/>
          <Projects/>
          <Contacts/>
      </main>
  )
}
