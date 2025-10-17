import { IncidentCardList } from "@/components/incident-card-list";
import { mockIncidents } from "@/data/mock-incidents";
import { ResourceFilterBar } from "@/components/resource-filter-bar";
import { ResourceMap } from "@/components/resource-map";
import { useState } from "react";
import { ResourceType } from "@/types/resource";

function Incidents() {
  const [selectedResources, setSelectedResources] = useState<ResourceType[]>(
    []
  );

  const handleResourceFilter = (filter: ResourceType) => {
    setSelectedResources((prev) => {
      if (prev.includes(filter)) {
        // If the filter is already selected, remove it
        return prev.filter((resource) => resource !== filter);
      } else {
        // If the filter is not selected, add it
        return [...prev, filter];
      }
    });
  };

  const handleClearAll = () => {
    setSelectedResources([]);
  };

  return (
    <>
      {/* main container below the header */}

      <div className="content-container h-[100%] mx-auto p-4 flex justify-start flex-row overflow-hidden flex-1">
        {/* 40% of the main container is the cards list */}
        <div className="p-4 w-[40%] h-[100%] overflow-y-hidden">
          <IncidentCardList
            incidents={mockIncidents}
            onCardClick={(incident) =>
              console.log("Clicked incident:", incident)
            }
          />
        </div>
        {/* the rest 60% is the maps and the resources. */}
        <div className="flex-1 min-w-0 h-[100%] flex flex-col">
          <ResourceFilterBar
            onFilterChange={handleResourceFilter}
            selectedResources={selectedResources}
            onClearAll={handleClearAll}
          />
          <div 
            className="Image-map w-full flex-1 bg-grey-50"
            style={{
              backgroundImage: 'url(/src/assets/seattlemap.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <ResourceMap selectedResources={selectedResources} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Incidents;
