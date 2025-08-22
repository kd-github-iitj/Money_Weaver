import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { OperationsCard } from "@/components/OperationsCard";
import { Button } from "@/components/ui/button";
import {
  DollarSign,
  FileText,
  Users,
  Package,
  TrendingUp,
  BarChart3,
  Target,
  ShoppingBag,
  Radio,
  Store,
  Megaphone,
  Tag,
  Building,
  Settings,
} from "lucide-react";

export default function Index() {
  return (
    <DashboardLayout>
      <div className="h-full overflow-y-auto p-3 space-y-4">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl p-4 border border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-semibold text-pink-500 mb-1">
                Well begun is half done
              </h1>
              <p className="text-gray-600 text-sm">
                Complete the following steps to sell
              </p>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap gap-2 lg:gap-3">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-xl px-4 py-2 h-20 text-sm font-medium shadow-lg">
                <div className="flex items-start justify-between w-full gap-2">
                  <div className="flex flex-col items-start">
                    <p>1.Certification</p>
                    <p className="text-xs font-thin">Upload qualification information</p>
                  </div>
                  <div className="bg-pink-400 text-xs px-2 py-1 rounded-full">
                    Go   
                  </div>
                </div>
              </Button>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl px-6 py-4 h-20 text-sm font-medium shadow-lg">
                <div className="flex items-start justify-between w-full gap-2">
                  <div className="flex flex-col items-start">
                    <p>2.Uplaod a product</p>
                    <p className="text-xs font-thin">Fill in product information</p>
                  </div>
                  <div className="bg-blue-400 text-xs px-2 py-1 rounded-full">
                    Go   
                  </div>
                </div>
              </Button>
              <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-xl px-6 py-4 h-20 text-sm font-medium shadow-lg">
                {/* <span className="flex items-center gap-2">
                  ↗ Open for sale{" "}
                  <span className="bg-purple-400 text-xs px-2 py-1 rounded-full">
                    0/6
                  </span>
                </span> */}
                <div className="flex items-start justify-between w-full gap-2">
                  <div className="flex flex-col items-start">
                    <p>3.Open for sale</p>
                    <p className="text-xs font-thin">Choose to open any sales channel</p>
                  </div>
                  <div className="bg-purple-400 text-xs px-2 py-1 rounded-full">
                    Go   
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Today's Data Section */}
        <div className="bg-white rounded-2xl p-4 border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-900">
              Today's data
            </h2>
            <Button
              variant="ghost"
              className="text-pink-500 hover:text-pink-600 text-sm"
            >
              More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-3">
            <StatCard
              title="Payment amount"
              value="8,672"
              subtitle="Yesterday 86.5%"
              icon={<DollarSign className="w-5 h-5 text-pink-600" />}
              bgColor="bg-gradient-to-br from-pink-500 to-pink-600"
              iconBg="bg-pink-400/30"
            />
            <StatCard
              title="Payment order"
              value="793"
              subtitle="Yesterday 77%"
              icon={<FileText className="w-5 h-5 text-blue-600" />}
              bgColor="bg-gradient-to-br from-blue-500 to-blue-600"
              iconBg="bg-blue-400/30"
            />
            <StatCard
              title="Paying customer"
              value="302"
              subtitle="Yesterday 9%"
              icon={<Users className="w-5 h-5 text-purple-600" />}
              bgColor="bg-gradient-to-br from-purple-500 to-purple-600"
              iconBg="bg-purple-400/30"
            />
            <StatCard
              title="Pending orders"
              value="480"
              subtitle="Yesterday 47%"
              icon={<Package className="w-5 h-5 text-green-600" />}
              bgColor="bg-gradient-to-br from-green-500 to-green-600"
              iconBg="bg-green-400/30"
            />
          </div>

          {/* Additional Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Live stream viewers
                  </p>
                  <p className="text-lg font-bold text-gray-900 mt-1">23,466</p>
                  <p className="text-xs text-gray-500 mt-1">Yesterday 22.3%</p>
                </div>
                {/* <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-orange-600" />
                </div> */}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    New attention
                  </p>
                  <p className="text-lg font-bold text-gray-900 mt-1">590</p>
                  <p className="text-xs text-gray-500 mt-1">Yesterday 86%</p>
                </div>
                {/* <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-red-600" />
                </div> */}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Cumulative attention
                  </p>
                  <p className="text-lg font-bold text-gray-900 mt-1">
                    135,743
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Yesterday 143,052
                  </p>
                </div>
                {/* <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-purple-600" />
                </div> */}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Number of orders
                  </p>
                  <p className="text-lg font-bold text-gray-900 mt-1">5,249</p>
                  <p className="text-xs text-gray-500 mt-1">Yesterday 5,665</p>
                </div>
                {/* <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4 text-green-600" />
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Operations Assistant Section */}
        <div className="bg-white rounded-2xl p-4 border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-900">
              Operations Assistant
            </h2>
            <Button
              variant="ghost"
              className="text-pink-500 hover:text-pink-600 text-sm"
            >
              More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <OperationsCard
              icon={<Radio className="w-4 h-4 text-white" />}
              title="Small telecast live"
              subtitle="Live Tools is Xin/shap"
              iconColor="bg-pink-500"
            />
            <OperationsCard
              icon={<Store className="w-4 h-4 text-white" />}
              title="Mini Program Store"
              subtitle="One Key and Upload Programs"
              iconColor="bg-green-500"
            />
            <OperationsCard
              icon={<Target className="w-4 h-4 text-white" />}
              title="Distribution market"
              subtitle="One click on distribution"
              iconColor="bg-blue-500"
            />
            <OperationsCard
              icon={<Tag className="w-4 h-4 text-white" />}
              title="Coupon"
              subtitle="Store coupons, platform coupons"
              iconColor="bg-red-500"
            />
            <OperationsCard
              icon={<Building className="w-4 h-4 text-white" />}
              title="Store construction"
              subtitle="Get the customized"
              iconColor="bg-blue-600"
            />
            <OperationsCard
              icon={<Megaphone className="w-4 h-4 text-white" />}
              title="Promoting ads"
              subtitle="We Pay Better Scroll Exposure"
              iconColor="bg-orange-500"
            />
            <OperationsCard
              icon={<Tag className="w-4 h-4 text-white" />}
              title="Promotion rebate"
              subtitle="Help you get quotes"
              iconColor="bg-purple-500"
            />
            <OperationsCard
              icon={<Settings className="w-4 h-4 text-white" />}
              title="Asset Management"
              subtitle="Income and withdrawal"
              iconColor="bg-green-600"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
