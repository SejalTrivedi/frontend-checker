import React from 'react';
import { demoTableStoryRows } from '../../data/data';
import { Table } from '../../molecules/Table/Table';
interface Candidate {
  id: number;
  name: string;
  email: string;
  position: string;
}

export interface CandidateTableProps {
  candidates: Candidate[];
}

export const CandidateTable: React.FC<CandidateTableProps> = ({ candidates }) => {

  return (
    <div>
      <Table dataRows={demoTableStoryRows}>
      </Table>
    </div>
  );
};

export default CandidateTable;

