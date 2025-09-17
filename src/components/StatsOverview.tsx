import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Globe, Zap, Shield, Package, AlertTriangle } from "lucide-react";

interface StatsData {
  totalFeatures: number;
  averageSupport: number;
  stableFeatures: number;
  experimentalFeatures: number;
  deprecatedFeatures: number;
  polyfillCoverage: number;
  accessibilityScore: number;
  performanceImpact: {
    low: number;
    medium: number;
    high: number;
  };
}

interface StatsOverviewProps {
  stats: StatsData;
}

export function StatsOverview({ stats }: StatsOverviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Features */}
      <Card className="bg-gradient-secondary border-border/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total Features</CardTitle>
          <TrendingUp className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">{stats.totalFeatures}</div>
          <p className="text-xs text-muted-foreground">
            Tracked web features
          </p>
        </CardContent>
      </Card>

      {/* Average Browser Support */}
      <Card className="bg-gradient-secondary border-border/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Avg Browser Support</CardTitle>
          <Globe className="h-4 w-4 text-info" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">{stats.averageSupport}%</div>
          <Progress value={stats.averageSupport} className="mt-2 h-2" />
        </CardContent>
      </Card>

      {/* Accessibility Score */}
      <Card className="bg-gradient-secondary border-border/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Accessibility</CardTitle>
          <Shield className="h-4 w-4 text-success" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">{stats.accessibilityScore}/100</div>
          <Progress value={stats.accessibilityScore} className="mt-2 h-2" />
        </CardContent>
      </Card>

      {/* Polyfill Coverage */}
      <Card className="bg-gradient-secondary border-border/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Polyfill Coverage</CardTitle>
          <Package className="h-4 w-4 text-warning" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">{stats.polyfillCoverage}%</div>
          <Progress value={stats.polyfillCoverage} className="mt-2 h-2" />
        </CardContent>
      </Card>

      {/* Feature Status Breakdown */}
      <Card className="bg-gradient-secondary border-border/50 md:col-span-2">
        <CardHeader>
          <CardTitle className="text-sm font-medium text-muted-foreground">Feature Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-success">Stable</span>
              <span className="font-mono">{stats.stableFeatures}</span>
            </div>
            <Progress value={(stats.stableFeatures / stats.totalFeatures) * 100} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-warning">Experimental</span>
              <span className="font-mono">{stats.experimentalFeatures}</span>
            </div>
            <Progress value={(stats.experimentalFeatures / stats.totalFeatures) * 100} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-destructive">Deprecated</span>
              <span className="font-mono">{stats.deprecatedFeatures}</span>
            </div>
            <Progress value={(stats.deprecatedFeatures / stats.totalFeatures) * 100} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Performance Impact */}
      <Card className="bg-gradient-secondary border-border/50 md:col-span-2">
        <CardHeader>
          <CardTitle className="text-sm font-medium text-muted-foreground">Performance Impact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-success">Low Impact</span>
              <span className="font-mono">{stats.performanceImpact.low}</span>
            </div>
            <Progress value={(stats.performanceImpact.low / stats.totalFeatures) * 100} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-warning">Medium Impact</span>
              <span className="font-mono">{stats.performanceImpact.medium}</span>
            </div>
            <Progress value={(stats.performanceImpact.medium / stats.totalFeatures) * 100} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-destructive">High Impact</span>
              <span className="font-mono">{stats.performanceImpact.high}</span>
            </div>
            <Progress value={(stats.performanceImpact.high / stats.totalFeatures) * 100} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
