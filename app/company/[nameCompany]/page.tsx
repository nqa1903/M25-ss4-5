import React from 'react';

interface NameCompany {
    nameCompany : string;
} 

interface Props{
    params : NameCompany;
}

export default function CompanyName(props : Props) {
    const {params} = props;
  return (
    <div>
      Company name: {params.nameCompany}
    </div>
  );
}
