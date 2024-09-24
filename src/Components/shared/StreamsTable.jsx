import React from "react";
import { recentStreams } from "../../assets/constants";

const TableHeader = ({ text }) => (
  <th className="px-6 py-5 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
    {text}
  </th>
);
const TableData = ({ text }) => (
  <td className="px-6 py-4 text-left whitespace-nowrap text-gray-600">
    {text}
  </td>
);

const StreamsTable = () => {
  return (
    <div className="flex flex-col overflow-x-auto my-8">
      <table className="min-w-full divide-y divide-gray-200 py-4 border rounded-xl">
        <thead>
          <tr>
            {Object.keys(recentStreams[0]).map((key) => (
              <TableHeader text={recentStreams[0][key].label} />
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {recentStreams.map((stream, index) => (
            <tr key={`tdindex_${index + 1}`}>
              <TableData text={stream.songName.value} />
              <TableData text={stream.artist.value} />
              <TableData text={stream.dateStreamed.value} />
              <TableData text={stream.streamCount.value} />
              <TableData text={stream.userId.value} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StreamsTable;
