import { useState, createContext } from 'react';
import { projectName } from '../pages/ProjectSingle';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectDatacopy2';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
  const [singleProjectData, setSingleProjectData] = useState(singleProjectDataJson);

  return (
    <SingleProjectContext.Provider value={{ singleProjectData, setSingleProjectData }}>
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;