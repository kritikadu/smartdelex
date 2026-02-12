import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { tenders } from "@/lib/data";

const data = [
  { name: 'Jan', tenders: 40 },
  { name: 'Feb', tenders: 30 },
  { name: 'Mar', tenders: 20 },
  { name: 'Apr', tenders: 27 },
  { name: 'May', tenders: 18 },
  { name: 'Jun', tenders: 23 },
  { name: 'Jul', tenders: 34 },
];

const pieData = [
  { name: 'Construction', value: 400 },
  { name: 'IT Services', value: 300 },
  { name: 'Supply', value: 300 },
  { name: 'Energy', value: 200 },
];

const COLORS = ['#4f46e5', '#0ea5e9', '#10b981', '#f59e0b'];

export default function AdminDashboard() {
  return (
    <div className="container px-4 py-8 mx-auto md:px-8">
       <div className="mb-8">
          <h1 className="text-3xl font-bold font-heading">Admin Overview</h1>
          <p className="text-muted-foreground">Platform statistics and system health.</p>
        </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Tender Publishing Trends</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="name" 
                  stroke="#888888" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis 
                  stroke="#888888" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  tickFormatter={(value) => `${value}`} 
                />
                <Tooltip 
                    cursor={{fill: 'hsl(var(--muted))'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="tenders" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Tenders by Category</CardTitle>
            <CardDescription>Distribution of active tenders</CardDescription>
          </CardHeader>
          <CardContent>
             <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 text-sm text-muted-foreground">
                  {pieData.map((entry, index) => (
                      <div key={index} className="flex items-center">
                          <div className="w-3 h-3 mr-2 rounded-full" style={{backgroundColor: COLORS[index % COLORS.length]}} />
                          {entry.name}
                      </div>
                  ))}
              </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-xl font-bold font-heading">Recent System Activity</h2>
        <div className="border rounded-lg bg-card">
            <div className="grid grid-cols-4 p-4 font-medium border-b bg-muted/50 text-sm">
                <div>Activity</div>
                <div>User</div>
                <div>Status</div>
                <div>Time</div>
            </div>
            {[1,2,3,4,5].map((i) => (
                <div key={i} className="grid grid-cols-4 p-4 text-sm border-b last:border-0 hover:bg-muted/20">
                    <div>New Bid Submitted</div>
                    <div>TechSolutions Pvt Ltd</div>
                    <div className="text-green-600">Success</div>
                    <div className="text-muted-foreground">2 mins ago</div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
