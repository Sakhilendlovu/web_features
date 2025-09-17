import { useState, useMemo } from "react";
import { FeatureCard } from "@/components/FeatureCard";
import { SearchBar } from "@/components/SearchBar";
import { StatsOverview } from "@/components/StatsOverview";
import { mockFeatures, mockStats } from "@/data/mockFeatures";
import { Code2, Layers, Zap } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredFeatures = useMemo(() => {
    return mockFeatures.filter((feature) => {
      const matchesSearch = feature.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           feature.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || feature.category === selectedCategory;
      const matchesStatus = selectedStatus === "all" || feature.status === selectedStatus;
      
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchQuery, selectedCategory, selectedStatus]);

  const activeFilters = useMemo(() => {
    const filters = [];
    if (selectedCategory !== "all") filters.push(`Category: ${selectedCategory}`);
    if (selectedStatus !== "all") filters.push(`Status: ${selectedStatus}`);
    return filters;
  }, [selectedCategory, selectedStatus]);

  const handleRemoveFilter = (filter: string) => {
    if (filter.startsWith("Category:")) {
      setSelectedCategory("all");
    } else if (filter.startsWith("Status:")) {
      setSelectedStatus("all");
    }
  };

  const handleClearFilters = () => {
    setSelectedCategory("all");
    setSelectedStatus("all");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">WebFeature Analyzer</h1>
                <p className="text-sm text-muted-foreground">Modern web features compatibility & insights</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>{mockFeatures.length} Features</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Real-time Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Stats Overview */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
          <StatsOverview stats={mockStats} />
        </section>

        {/* Search and Filters */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Explore Features</h2>
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedStatus={selectedStatus}
            onStatusChange={setSelectedStatus}
            activeFilters={activeFilters}
            onRemoveFilter={handleRemoveFilter}
            onClearFilters={handleClearFilters}
          />
        </section>

        {/* Results */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-foreground">
              Features ({filteredFeatures.length})
            </h2>
            {filteredFeatures.length === 0 && (
              <p className="text-sm text-muted-foreground">No features match your criteria</p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatures.map((feature, index) => (
              <FeatureCard key={`${feature.name}-${index}`} feature={feature} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};


export default Index;
