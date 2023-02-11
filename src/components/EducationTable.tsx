import { Table, Text } from "@nextui-org/react";
import Link from "next/link";

const arr = [
    {
        school:'BEHS-1',
        role:'G-1 to G-10',
        schoolLink:""
    },
    {
        school:'Parami Private School',
        role:'G-11',
        schoolLink:""
    },
    {
        school:'Metro IT and Japanese Language Center',
        role:`FE and English`,
        schoolLink:""
    },
    {
        school:'BMPS Education Center',
        role:'Frontend development',
        schoolLink:""
    },
    {
        school:'MMS IT',
        role:'BWD, SWD',
        schoolLink:""
    },
]

export default function EducationTable() {
  return (
    <Table
    bordered
      aria-label="Example table with static content"
      css={{
        maxWidth:"100%",
        p:1,
        
      }}
    >
      <Table.Header>
        <Table.Column css={{}}>School</Table.Column>
        <Table.Column css={{}}>Role</Table.Column>
      </Table.Header>
      <Table.Body>
        
        {
            arr.map((item,index)=><Table.Row css={{py:1,maxWidth:"50%"}} key={index}>
            <Table.Cell css={{flexWrap:"wrap",maxWidth:200}}><Link href={item.schoolLink}>{item.school}</Link></Table.Cell>
            <Table.Cell css={{maxWidth:200}}>{item.role}</Table.Cell>
          </Table.Row>)
        }
      </Table.Body>
    </Table>
  );
}
