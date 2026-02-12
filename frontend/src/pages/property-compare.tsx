import { useState } from "react";
import { properties } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, X } from "lucide-react";

export default function PropertyCompare() {
  const [prop1Id, setProp1Id] = useState<string>(properties[0].id.toString());
  const [prop2Id, setProp2Id] = useState<string>(properties[1].id.toString());

  const prop1 = properties.find(p => p.id.toString() === prop1Id);
  const prop2 = properties.find(p => p.id.toString() === prop2Id);

  return (
    <div className="container px-4 py-8 mx-auto md:px-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-heading">Smart Property Comparison</h1>
        <p className="text-muted-foreground">Compare features, prices, and ratings side-by-side.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 mb-8">
        <Card className="border-2 border-primary/20">
           <CardHeader>
             <CardTitle>Property A</CardTitle>
             <Select value={prop1Id} onValueChange={setProp1Id}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Property" />
                </SelectTrigger>
                <SelectContent>
                  {properties.map(p => (
                      <SelectItem key={p.id} value={p.id.toString()}>{p.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
           </CardHeader>
           <CardContent className="p-0">
               {prop1 && (
                   <div className="relative aspect-video w-full overflow-hidden bg-muted">
                       <img src={prop1.image} alt={prop1.name} className="object-cover w-full h-full" />
                   </div>
               )}
           </CardContent>
        </Card>

        <Card className="border-2 border-primary/20">
           <CardHeader>
             <CardTitle>Property B</CardTitle>
             <Select value={prop2Id} onValueChange={setProp2Id}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Property" />
                </SelectTrigger>
                <SelectContent>
                  {properties.map(p => (
                      <SelectItem key={p.id} value={p.id.toString()}>{p.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
           </CardHeader>
           <CardContent className="p-0">
               {prop2 && (
                   <div className="relative aspect-video w-full overflow-hidden bg-muted">
                       <img src={prop2.image} alt={prop2.name} className="object-cover w-full h-full" />
                   </div>
               )}
           </CardContent>
        </Card>
      </div>

      {prop1 && prop2 && (
          <div className="border rounded-xl overflow-hidden bg-card shadow-lg">
              <div className="grid grid-cols-3 bg-muted/50 p-4 font-bold text-lg border-b">
                  <div className="text-center md:text-left">Feature</div>
                  <div className="text-center text-primary">{prop1.name}</div>
                  <div className="text-center text-primary">{prop2.name}</div>
              </div>

              {[
                  { label: "Price", val1: `₹${(prop1.price/10000000).toFixed(2)} Cr`, val2: `₹${(prop2.price/10000000).toFixed(2)} Cr`, highlight: true },
                  { label: "Location", val1: prop1.location, val2: prop2.location },
                  { label: "Area (sqft)", val1: prop1.area, val2: prop2.area },
                  { label: "Bedrooms", val1: prop1.bedrooms, val2: prop2.bedrooms },
                  { label: "Rating", val1: `${prop1.rating}/5`, val2: `${prop2.rating}/5` },
              ].map((row, i) => (
                  <div key={i} className={`grid grid-cols-3 p-4 border-b last:border-0 hover:bg-muted/20 ${row.highlight ? 'bg-primary/5 font-semibold' : ''}`}>
                      <div className="text-muted-foreground text-center md:text-left font-medium">{row.label}</div>
                      <div className="text-center">{row.val1}</div>
                      <div className="text-center">{row.val2}</div>
                  </div>
              ))}
              
              <div className="grid grid-cols-3 p-6 bg-muted/20">
                  <div></div>
                  <div className="px-2"><Button className="w-full">Contact Agent</Button></div>
                  <div className="px-2"><Button className="w-full">Contact Agent</Button></div>
              </div>
          </div>
      )}
    </div>
  );
}
