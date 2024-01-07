import Container from '@/components/Cards/Container';
import ContainerStyles from '@/components/Cards/Container/container.module.scss';
import ProjectCard from '@/components/Cards/Project';

const project = {
    id: '1',
    name: 'Kyaw Zin Thiha',
    description: 'A personal portfolio website built with Next.js and TypeScript. This website is a showcase of my' +
        ' skills and projects. It also serves as ',
    languages: ['TypeScript', 'JavaScript', 'Python'],
    topics: ['React', 'Next', 'Node.js'],
    repository: 'google.com',
    demo: '',
    thumbnail: 'https://images.unsplash.com/photo-1617529497471-9218633199c0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbXxlbnwwfHwwfHx8MA%3D%3D'
};
export default function Projects() {
    return (
        <Container id={'projects'} className={'projects'}>
            <div className={ContainerStyles.title}>
                <h2>
                    {'<Projects/>'}
                </h2>
                <hr/>
            </div>
            <div>
                <ProjectCard project={project}/>
                <ProjectCard project={project}/>
                <ProjectCard project={project}/>
                <ProjectCard project={project}/>
            </div>
        </Container>
    );
}