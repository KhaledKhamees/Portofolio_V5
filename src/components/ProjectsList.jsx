import React, { useEffect, useState } from 'react';
import CardProject from './CardProject';

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects.json') // Now correctly fetches from public/
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error loading projects:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
      {projects.length > 0 ? (
        projects.map((project) => (
          <CardProject
            key={project.id}
            Img={project.Img}
            Title={project.Title}
            Description={project.Description}
            Link={project.Link}
            id={project.id}
          />
        ))
      ) : (
        <p className="text-white">No projects available.</p>
      )}
    </div>
  );
};

export default ProjectsList;
