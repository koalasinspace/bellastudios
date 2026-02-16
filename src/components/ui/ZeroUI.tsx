import React, { ReactNode } from 'react';
import { LogOut, Layout, Settings, Bell, Ghost, Home, MessageSquare, Bot, CreditCard } from 'lucide-react';
import Link from 'next/link';

interface NavItemType {
  icon: React.ReactElement;
  label: string;
  path: string;
}

const adminNav: NavItemType[] = [
    { icon: <Layout />, label: 'Dashboard', path: '/admin' },
    { icon: <Bot />, label: 'Admin-Agent', path: '/admin/agent' },
    { icon: <MessageSquare />, label: 'Messages', path: '/admin/messages' },
    { icon: <CreditCard />, label: 'Billing', path: '/billing' },
    { icon: <Settings />, label: 'Settings', path: '/admin/settings' },
];

const devNav: NavItemType[] = [
    { icon: <Layout />, label: 'Dashboard', path: '/dev' },
    { icon: <Bot />, label: 'Dev-Agent', path: '/dev/agent' },
    { icon: <MessageSquare />, label: 'Messages', path: '/dev/messages' },
    { icon: <CreditCard />, label: 'Billing', path: '/billing' },
];

const testerNav: NavItemType[] = [
    { icon: <Home />, label: 'Store', path: '/tester' },
    { icon: <Bot />, label: 'Tester-Agent', path: '/tester/agent' },
    { icon: <CreditCard />, label: 'Billing', path: '/billing' },
];

interface DashboardLayoutProps {
  children: ReactNode;
  role: string;
  user: string;
  onLogout: () => void;
}

export function DashboardLayout({ children, role, user, onLogout }: DashboardLayoutProps) {
    let navItems: NavItemType[] = [];
    if (role === 'ADMIN') navItems = adminNav;
    else if (role === 'DEV') navItems = devNav;
    else if (role === 'TESTER') navItems = testerNav;

    return (
      <div className="min-h-screen bg-[#050505] flex flex-col md:flex-row text-[#e8e8e8] font-sans selection:bg-[#7eb8da] selection:text-white">
        
        <div className="hidden md:flex w-20 lg:w-64 border-r border-white/5 flex-col bg-[#0a0a0a] sticky top-0 h-screen">
          <div className="h-16 flex items-center justify-center lg:justify-start lg:px-6 border-b border-white/5">
            <Ghost className="w-6 h-6 text-[#7eb8da]" />
            <span className="hidden lg:block ml-3 font-bold text-white tracking-tight">BELLA<span className="text-[#7eb8da]">STUDIO</span></span>
          </div>
          
          <nav className="flex-1 py-6 space-y-1 px-2 lg:px-4">
            {navItems.map(item => (
                <Link href={item.path} key={item.label}>
                    <NavItem icon={item.icon} label={item.label} active={item.label === 'Dashboard' || item.label === 'Store'} />
                </Link>
            ))}
          </nav>
  
          <div className="p-4 border-t border-white/5">
              <button onClick={onLogout} className="flex items-center justify-center lg:justify-start w-full text-[#666666] hover:text-white transition-colors gap-3">
                  <LogOut className="w-5 h-5" />
                  <span className="hidden lg:block text-xs font-mono">LOGOUT</span>
              </button>
          </div>
        </div>
  
        <div className="flex-1 flex flex-col min-h-0">
          <header className="h-16 border-b border-white/5 flex items-center justify-between px-4 md:px-8 bg-[#050505]/80 backdrop-blur sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <Ghost className="w-5 h-5 text-[#7eb8da] md:hidden" />
              <span className="text-[10px] md:text-xs font-mono text-[#444444] tracking-widest">PORTAL // {role}</span>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <Bell className="w-4 h-4 text-[#666666] hover:text-[#7eb8da] cursor-pointer transition-colors" />
              <div className="flex items-center gap-3 pl-4 md:pl-6 border-l border-white/5">
                <div className="text-right hidden md:block">
                  <div className="text-xs font-bold text-white">{user}</div>
                  <div className="text-[10px] text-[#666666] font-mono">
                    {role === 'ADMIN' ? 'ADMINISTRATOR' : role === 'DEV' ? 'LEAD DEVELOPER' : 'TESTER'}
                  </div>
                </div>
                <div className="w-8 h-8 rounded bg-gradient-to-tr from-[#7eb8da] to-purple-500 border border-white/10" />
              </div>
            </div>
          </header>
  
          <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-24 md:pb-8 relative">
            {children}
          </main>
  
          <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#0a0a0a]/90 backdrop-blur border-t border-white/5 flex items-center justify-around px-2 z-30">
            {navItems.map(item => (
                <Link href={item.path} key={item.label}>
                    <MobileNavItem icon={item.icon} label={item.label} active={item.label === 'Dashboard' || item.label === 'Store'} />
                </Link>
            ))}
            <button onClick={onLogout} className="flex flex-col items-center justify-center p-2 text-[#666666] active:text-white">
              <LogOut className="w-5 h-5 mb-1" />
              <span className="text-[9px]">Exit</span>
            </button>
          </div>
        </div>
      </div>
    );
}

interface NavItemProps {
  icon: React.ReactElement;
  label: string;
  active: boolean;
}

export function NavItem({ icon, label, active }: NavItemProps) {
  return (
    <div className={`w-full flex items-center justify-center lg:justify-start gap-3 px-3 py-3 rounded-lg transition-all cursor-pointer ${active ? 'bg-[#7eb8da]/10 text-[#7eb8da] border border-[#7eb8da]/20' : 'text-[#a1a1a1] hover:bg-white/5 hover:text-white border border-transparent'}`}>
      {React.cloneElement(icon, { size: 18 })}
      <span className="hidden lg:block text-sm font-medium">{label}</span>
    </div>
  );
}

export function MobileNavItem({ icon, label, active }: NavItemProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all ${active ? 'text-[#7eb8da]' : 'text-[#a1a1a1] active:text-white'}`}>
      {React.cloneElement(icon, { size: 20 })}
      <span className="text-[9px] mt-1">{label}</span>
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactElement;
  label: string;
  value: string;
  change?: string;
  isGood?: boolean;
}

export function StatCard({ icon, label, value, change, isGood }: StatCardProps) {
  return (
    <div className="bg-[#121212] border border-white/5 p-4 md:p-5 rounded-xl active:bg-[#1a1a1a] transition-colors">
      <div className="flex justify-between items-start mb-3 md:mb-4">
        <div className="p-2 bg-[#1a1a1a] rounded text-[#a1a1a1]">{React.cloneElement(icon, { size: 16 })}</div>
        {change && (
          <span className={`text-[9px] md:text-[10px] font-mono px-1.5 py-0.5 rounded border ${isGood ? 'bg-[#34d399]/10 text-[#34d399] border-[#34d399]/20' : 'bg-[#7eb8da]/10 text-[#7eb8da] border-[#7eb8da]/20'}`}>
            {change}
          </span>
        )}
      </div>
      <div className="text-xl md:text-2xl font-light text-white mb-1">{value}</div>
      <div className="text-[9px] md:text-[10px] text-[#666666] font-mono tracking-wider">{label}</div>
    </div>
  );
}

interface TimelineItemProps {
  time: string;
  user: string;
  action: string;
}

export function TimelineItem({ time, user, action }: TimelineItemProps) {
  return (
    <div className="flex gap-4 items-center group">
      <div className="w-14 md:w-16 text-right text-[9px] md:text-[10px] text-[#666666] font-mono pt-1 shrink-0">{time}</div>
      <div className="w-2 h-2 rounded-full bg-[#1a1a1a] border border-[#7eb8da]/30 group-hover:bg-[#7eb8da] transition-colors relative z-10 shrink.0">
        <div className="absolute top-2 left-1/2 w-px h-full bg-white/5 -translate-x-1/2" />
      </div>
      <div className="pb-4 border-b border-white/5 flex-1 pt-1 min-w-0">
        <span className="text-[#7eb8da] text-[10px] md:text-xs font-bold mr-2">{user}</span>
        <span className="text-[#a1a1a1] text-[10px] md:text-xs truncate block md:inline">{action}</span>
      </div>
    </div>
  );
}

interface ActionCardProps {
  title: string;
  icon: React.ReactElement;
}

export function ActionCard({ title, icon }: ActionCardProps) {
  return (
    <button className="flex items-center gap-3 p-3 md:p-4 bg-[#1a1a1a] border border-white/5 rounded-lg active:bg-[#202020] md:hover:border-[#7eb8da]/50 md:hover:bg-[#202020] transition-all group">
      <div className="p-2 bg-[#0a0a0a] rounded border border-white/5 md:group-hover:scale-110 transition-transform">
        {React.cloneElement(icon, { size: 18 })}
      </div>
      <span className="text-[10px] md:text-xs font-bold text-[#e8e8e8] tracking-wide">{title}</span>
    </button>
  );
}

interface AgentMessageProps {
  text: string;
  time: string;
  isSystem: boolean;
}

export function AgentMessage({ text, time, isSystem }: AgentMessageProps) {
  return (
    <div className={`flex flex-col gap-1 ${isSystem ? 'items-center text-center my-4 opacity-50' : 'items-start'}`}>
      <div className={`max-w-[95%] p-2 rounded ${isSystem ? 'bg-transparent text-[#7eb8da]' : 'bg-[#1a1a1a] border border-white/5 text-[#a1a1a1]'}`}>
        {text}
      </div>
      {!isSystem && <span className="text-[8px] md:text-[9px] text-[#444444] px-1">{time}</span>}
    </div>
  );
}

interface TaskCardProps {
  title: string;
  reward: string;
  done: boolean;
}

export function TaskCard({ title, reward, done }: TaskCardProps) {
  return (
    <div className={`p-4 rounded-lg border flex justify-between items-center ${done ? 'bg-[#34d399]/5 border-[#34d399]/20' : 'bg-[#1a1a1a] border-white/5'}`}>
      <div className="flex items-center gap-3">
        <div className={`w-4 h-4 rounded border flex items-center justify-center ${done ? 'bg-[#34d399] border-[#34d399]' : 'border-[#444444]'}`}>
          {done && <span className="text-black text-[10px] font-bold">✓</span>}
        </div>
        <span className={`text-sm ${done ? 'text-[#34d399] line-through' : 'text-[#e8e8e8]'}`}>{title}</span>
      </div>
      <span className="text-[10px] font-mono text-[#666666] bg-[#0a0a0a] px-2 py-1 rounded">{reward}</span>
    </div>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => (
  <div className={`bg-gray-800/50 border border-white/10 rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
);
