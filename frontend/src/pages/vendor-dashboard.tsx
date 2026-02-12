import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, FileText, Star, Clock, AlertCircle } from "lucide-react";

export default function VendorDashboard() {
  return (
    <div className="container px-4 py-8 mx-auto md:px-8">
      <div className="flex flex-col mb-8 space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold font-heading">Vendor Portal</h1>
          <p className="text-muted-foreground">Manage your bids, profile, and performance ratings.</p>
        </div>
        <div className="flex items-center space-x-2">
           <Badge variant="outline" className="px-3 py-1 text-sm bg-green-50 text-green-700 border-green-200">
            <div className="w-2 h-2 mr-2 bg-green-500 rounded-full animate-pulse" />
            Verified Vendor
           </Badge>
        </div>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-4">
        {[
          { label: "Active Bids", value: "12", icon: <FileText className="w-5 h-5 text-blue-500" /> },
          { label: "Win Rate", value: "68%", icon: <Award className="w-5 h-5 text-yellow-500" /> },
          { label: "Vendor Rating", value: "4.8/5", icon: <Star className="w-5 h-5 text-orange-500" /> },
          { label: "Pending Actions", value: "3", icon: <AlertCircle className="w-5 h-5 text-red-500" /> },
        ].map((stat, i) => (
          <Card key={i}>
            <CardContent className="flex items-center p-6 space-x-4">
              <div className="p-2 rounded-lg bg-muted">
                {stat.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                <h3 className="text-2xl font-bold font-heading">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="active-bids" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="active-bids">Active Bids</TabsTrigger>
          <TabsTrigger value="history">Bid History</TabsTrigger>
          <TabsTrigger value="performance">Performance Report</TabsTrigger>
        </TabsList>
        <TabsContent value="active-bids" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Active Bids</CardTitle>
              <CardDescription>Track the status of your submitted proposals.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex flex-col items-center justify-between p-4 border rounded-lg md:flex-row bg-card hover:bg-muted/30 transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded bg-primary/10 text-primary">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Smart City Infrastructure Phase {i}</h4>
                        <p className="text-sm text-muted-foreground">Mumbai Municipal Corporation</p>
                        <div className="flex items-center mt-2 space-x-4 text-xs text-muted-foreground">
                          <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> Submitted 2 days ago</span>
                          <span className="flex items-center">Bid Amount: ₹12.5 Cr</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mt-4 space-x-4 md:mt-0">
                       <Badge>Under Evaluation</Badge>
                       <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Past Bids</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">History content placeholder.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="performance">
             <Card>
            <CardHeader>
              <CardTitle>Performance Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Performance graphs placeholder.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
