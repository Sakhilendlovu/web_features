import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertTriangle, XCircle, Globe, Zap, Shield, Package } from "lucide-react";

interface BrowserSupport {
  chrome: number;
  firefox: number;
  safari: number;
  edge: number;
}

interface FeatureData {
  name: string;
  category: string;
  description: string;
  browserSupport: BrowserSupport;
  performanceImpact: "low" | "medium" | "high";
  accessibilityScore: number;
  polyfillAvailable: boolean;
  usage: number;
  status: "stable" | "experimental" | "deprecated";
}

interface FeatureCardProps {
  feature: FeatureData;
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "stable":
      return <CheckCircle className="w-4 h-4 text-success" />;
    case "experimental":
      return <AlertTriangle className="w-4 h-4 text-warning" />;
    case "deprecated":
      return <XCircle className="w-4 h-4 text-destructive" />;
    default:
      return null;
  }
};

const getPerformanceColor = (impact: string) => {
  switch (impact) {
    case "low":
      return "text-success";
    case "medium":
      return "text-warning";
    case "high":
      return "text-destructive";
    default:
      return "text-muted-foreground";
  }
};

const getBrowserSupportAverage = (support: BrowserSupport) => {
  return Math.round((support.chrome + support.firefox + support.safari + support.edge) / 4);
};

export function FeatureCard({ feature }: FeatureCardProps) {
  const avgSupport = getBrowserSupportAverage(feature.browserSupport);

  return (
    <Card className="bg-gradient-secondary border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-[1.02]">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">{feature.name}</CardTitle>
          <div className="flex items-center gap-2">
            {getStatusIcon(feature.status)}
            <Badge variant="secondary" className="text-xs">
              {feature.category}
            </Badge>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{feature.description}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Browser Support */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-info" />
            <span className="text-sm font-medium">Browser Support</span>
            <span className="text-xs text-muted-foreground">({avgSupport}% avg)</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex justify-between">
              <span>Chrome:</span>
              <span className="font-mono">{feature.browserSupport.chrome}%</span>
            </div>
            <div className="flex justify-between">
              <span>Firefox:</span>
              <span className="font-mono">{feature.browserSupport.firefox}%</span>
            </div>
            <div className="flex justify-between">
              <span>Safari:</span>
              <span className="font-mono">{feature.browserSupport.safari}%</span>
            </div>
            <div className="flex justify-between">
              <span>Edge:</span>
              <span className="font-mono">{feature.browserSupport.edge}%</span>
            </div>
          </div>
        </div>

        {/* Performance Impact */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-warning" />
            <span className="text-sm font-medium">Performance Impact</span>
            <span className={`text-xs font-medium ${getPerformanceColor(feature.performanceImpact)}`}>
              {feature.performanceImpact.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Accessibility Score */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-success" />
            <span className="text-sm font-medium">Accessibility</span>
            <span className="text-xs text-muted-foreground">{feature.accessibilityScore}/100</span>
          </div>
          <Progress value={feature.accessibilityScore} className="h-2" />
        </div>

        {/* Polyfill & Usage */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Package className="w-3 h-3 text-muted-foreground" />
            <span className={feature.polyfillAvailable ? "text-success" : "text-muted-foreground"}>
              {feature.polyfillAvailable ? "Polyfill Available" : "No Polyfill"}
            </span>
          </div>
          <div className="text-muted-foreground">
            Usage: {feature.usage}%
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
