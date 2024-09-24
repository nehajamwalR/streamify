import React, { useState } from "react";
import {
  defaultFilters,
  recentStreams,
  sortingOptions,
} from "../../assets/constants";
import TableHeader from "./TableHeader";
import TableData from "./TableData";
import useDebounce from "./useDebounce";
import Select from "./Select";

const StreamsTable = () => {
  const [searchName, setSearchName] = useState("");
  const [sortKey, setSortKey] = useState("dateStreamed");
  const [sortOrder, setSortOrder] = useState("desc");
  const debouncedSearchValue = useDebounce(searchName);

  const filteredStreams = recentStreams.filter((stream) => {
    return (
      stream.artist.value
        .toLowerCase()
        .includes(debouncedSearchValue.toLowerCase()) ||
      stream.songName.value
        .toLowerCase()
        .includes(debouncedSearchValue.toLowerCase())
    );
  });

  const sortedStreams = [...filteredStreams].sort((a, b) => {
    let aValue, bValue;

    if (sortKey === "dateStreamed") {
      aValue = new Date(a.dateStreamed.value);
      bValue = new Date(b.dateStreamed.value);
    } else if (sortKey === "streamCount") {
      aValue = a.streamCount.value;
      bValue = b.streamCount.value;
    }

    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  return (
    <div className="flex flex-col overflow-x-auto my-8">
      <div className="mb-4 flex-col flex md:flex-row flex-start gap-4">
        <input
          type="text"
          placeholder="Filter by artist or song name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border-2 p-2 mr-2 rounded-lg"
        />
        <Select
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value)}
          options={defaultFilters.sortOptions}
        />
        <Select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          options={sortingOptions}
        />
      </div>
      <div className="overflow-x-auto border-2 rounded-xl">
        <table className="min-w-full divide-y-2 divide-gray-200 py-4">
          <thead>
            <tr>
              {Object.keys(recentStreams[0]).map((key, index) => (
                <TableHeader
                  key={`${key}_index${index + 1}`}
                  text={recentStreams[0][key].label}
                />
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y-2 divide-gray-200">
            {sortedStreams.map((stream, index) => (
              <tr key={`tdindex_${index + 1}`} className="p-2">
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
    </div>
  );
};

export default StreamsTable;
