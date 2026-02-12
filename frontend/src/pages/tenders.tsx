import { useState } from "react";
import { tenders } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Calendar, Building2, IndianRupee } from "lucide-react";

export default function Tenders() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredTenders = tenders.filter(tender => {
    const matchesSearch = tender.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tender.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All" || tender.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...Array.from(new Set(tenders.map(t => t.category)))];

  return (
    <div className="container px-4 py-8 mx-auto md:px-8">
      <div className="flex flex-col mb-8 space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold font-heading">Active Tenders</h1>
          <p className="text-muted-foreground">Browse and bid on open government and private tenders.</p>
        </div>
        <Button>Post New Tender</Button>
      </div>

      <div className="flex flex-col mb-8 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search tenders..." 
            className="pl-9" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full md:w-[200px]">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(cat => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTenders.map(tender => (
          <Card key={tender.id} className="flex flex-col transition-all hover:shadow-md hover:border-primary/50">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant={tender.status === "Active" ? "default" : "secondary"}>
                  {tender.status}
                </Badge>
                <span className="text-xs text-muted-foreground font-mono">{tender.category}</span>
              </div>
              <CardTitle className="line-clamp-2">{tender.title}</CardTitle>
              <CardDescription className="flex items-center mt-1">
                <Building2 className="w-3 h-3 mr-1" />
                {tender.organization}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {tender.description}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-foreground font-medium">
                  <IndianRupee className="w-4 h-4 mr-1 text-muted-foreground" />
                  {tender.budget}
                </div>
                <div className="flex items-center text-foreground font-medium">
                  <Calendar className="w-4 h-4 mr-1 text-muted-foreground" />
                  {tender.deadline}
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-4 border-t bg-muted/20">
              <Button className="w-full">View Details & Bid</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredTenders.length === 0 && (
        <div className="py-12 text-center text-muted-foreground">
          No tenders found matching your criteria.
        </div>
      )}
    </div>
  );
}
