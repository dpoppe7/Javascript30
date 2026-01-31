"use client"; // this page uses client components

import React, { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import ASCIIEffect from "@/components/ASCIIEffect";
import { projects, type Project } from "@/data/projects";

type SortOption = "name" | "difficulty" | "id";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("id");

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects.filter((project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.title.localeCompare(b.title);
        case "difficulty":
          const difficultyOrder = { Beginner: 1, Intermediate: 2, Advanced: 3 };
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        case "id":
        default:
          return a.id.localeCompare(b.id);
      }
    });

    return filtered;
  }, [searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      {/* ONE WRAPPER TO RULE  ALL */}
      <main className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 py-12 space-y-12">
        
        {/* Header Section */}
        <header className="space-y-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            JavaScript30
          </h1>
          <p className="text-muted-foreground text-base md:text-xl max-w-3xl mx-auto">
            An interactive showcase of my implementations for {" "}
            <a 
              href="https://javascript30.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground font-medium hover:text-primary transition-all"
            >
              WesBos vanilla JS challenge.
            </a>
          </p>
        </header>

        {/* Filter Area: Flexbox */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-card/30 p-4 rounded-xl border border-border/50">
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="sm:max-w-md"
          />
          <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="id">Project #</SelectItem>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="difficulty">Difficulty</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Project Grid */}
        {filteredAndSortedProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border-2 border-dashed border-border rounded-2xl">
            <p className="text-muted-foreground">No matches found for "{searchQuery}"</p>
          </div>
        )}

      </main>

      <footer className="mt-20 border-t border-border/40 bg-card/10 pb-16 pt-10">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-16 flex flex-col items-center">          
          {/* Animated Divider */}
          <ASCIIEffect />
          
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm tracking-wide">
              Made with ❤️ by{" "}
              <a 
                href="https://damarisc.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-primary transition-all"
              >
                Damaris Poppe
              </a>
            </p>
            
            <p className="text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} — Built with Next.js & Tailwind CSS
            </p>
          </div>
          
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const projectUrl = `/projects/${project.folderName}/index.html`;

  return (
    <Card className="border-border/50 bg-background/60 backdrop-blur-md hover:border-primary/50 transition-all">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-2xl">{project.title}</CardTitle>
          <Badge variant="secondary">{project.difficulty}</Badge>
        </div>
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild className="flex-1">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            Launch
          </a>
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex-1">
              Details
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>{project.description}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-2">Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">Difficulty:</p>
                <Badge variant="secondary">{project.difficulty}</Badge>
              </div>
              <Button asChild className="w-full">
                <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                  Open Project
                </a>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
