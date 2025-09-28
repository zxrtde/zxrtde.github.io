const publications = [
  {
    authors:
      "With Ling Ren",
    title:
      "Lifeline: Optimal Byzantine Agreement Under Minimal Synchrony",
    type: "conference",
    paper_link:"https://ia.cr/2025/1318",
    abstract: ``, // You mentioned you'll fill in the abstract later
    venue: "In Submission",
  },
  {
    authors:
      "With Ertem Nusret Tas",
    title:
      "Dynamically Available Common Subset",
    type: "conference",
    paper_link:"https://eprint.iacr.org/2025/016",
    abstract: `Internet-scale consensus protocols used by blockchains are designed
     to remain operational in the presence of unexpected temporary crash faults (the so-called sleepy model of consensus)
      -- a critical feature for the latency-sensitive financial applications running on these systems. 

      However, their leader-based architecture, where a single block proposer is responsible for creating the block at each height,
      makes them vulnerable to short-term censorship attacks, in which the proposers profit at the application layer by excluding certain transactions. 
      In this work, we introduce an atomic broadcast protocol, secure in the sleepy model,
       that ensures the inclusion of all transactions within a constant expected time, 
       provided that at least one participating node is non-censoring at all times. 
      Unlike traditional approaches, our protocol avoids designating a single proposer per block height, 
      instead leveraging a so-called dynamically available common subset (DACS) protocol -- the first of its kind in the sleepy model. 
      Additionally, our construction guarantees deterministic synchronization -- once an honest node confirms a block, 
      all other honest nodes do so within a constant time, thus addressing a shortcoming of many low-latency sleepy protocols.`,
    venue: "In Submission",
  },
  {
    authors:
      "With Joseph Bonneau, Benedikt Bunz, Miranda Christ",
    title:
      "How Much Public Randomness Do Modern Consensus Protocols Need?",
    type: "conference",
    paper_link:"https://eprint.iacr.org/2024/1794",
    abstract: `Modern blockchain-based consensus protocols aim for efficiency (i.e., low communication and round complexity) 
    while maintaining security against adaptive adversaries. 
    These goals are usually achieved using a public randomness beacon to select roles for each participant.  
    We examine to what extent this randomness is necessary.
    Specifically, we provide tight bounds on the amount of entropy a Byzantine Agreement protocol must consume from a beacon 
    in order to enjoy efficiency and adaptive security.
    We first establish that no consensus protocol can simultaneously be efficient, be adaptively secure, and use $O(\log n)$ bits of beacon entropy. 
    We then show this bound is tight and, in fact, a trilemma by presenting three consensus protocols that achieve any two of these three properties.`,
    venue: "AFT 2025",
  },
  {
    authors:
      "With Joachim Neu, Toniann Pitassi",
    title:
      "Fully-Fluctuating Participation in Sleepy Consensus",
    type: "conference",
    paper_link:"https://arxiv.org/abs/2508.08068",
    abstract: `Proof-of-work allows Bitcoin to boast security amidst arbitrary fluctuations in participation
     of miners throughout time, so long as, at any point in time, a majority of hash power is honest.
     In recent years, however, the pendulum has shifted in favor of proof-of-stake-based consensus protocols.
     There, the sleepy model is the most prominent model for handling fluctuating participation of nodes.
     However, to date, no protocol in the sleepy model rivals Bitcoin in its robustness to drastic fluctuations
     in participation levels, with state-of-the-art protocols making various restrictive assumptions.
     In this work, we present a new adversary model, called external adversary.
     Intuitively, in our model, corrupt nodes do not divulge information about their secret keys.
     In this model, we show that protocols in the sleepy model can meaningfully claim to remain secure against
     fully fluctuating participation, without compromising efficiency or corruption resilience.
     Our adversary model is quite natural, and arguably naturally captures the process via which malicious
     behavior arises in protocols, as opposed to traditional worst-case modeling.
     On top of which, the model is also theoretically appealing,
     circumventing a barrier established in a recent work of Malkhi, Momose, and Ren.`,
    venue: "AFT 2025",
  },
  {
    authors:
      "With Joseph Bonneau, Benedikt Bunz, Miranda Christ",
    title:
      "Good things come to those who wait: Dishonest-Majority Coin-Flipping Requires Delay Functions",
    type: "conference",
    paper_link:"https://eprint.iacr.org/2024/1711",
    abstract: `We reconsider Cleve's famous 1986 impossibility result on coin-flipping without an honest majority.
      Recently proposed constructions have circumvented this limit by using cryptographic delay functions.
      We show that this is necessary: a (weak) notion of delay functions is in fact
      \\emph{implied} by the existence of a protocol circumventing Cleve's impossibility.
      However, such delay functions are weaker than those used in existing constructions.
      We complete our result by showing an equivalence,
      that these weaker delay functions are also sufficient to construct not just fair dishonest-majority coin-flipping protocols,
      but also the stronger notion of a distributed randomness beacon.
      We also show that this is possible in a weaker communication model than previously considered,
      without the assumption of reliable broadcast or a public bulletin board.`,
    venue: "Eurocrypt 2025",
  },
  {
    authors:
      "With Daniel Collins, Jovan Komatovic",
    title:
      "Juggernaut: Efficient Crypto-Agnostic Byzantine Agreement",
    type: "conference",
    paper_link:"https://eprint.iacr.org/2024/1601",
    abstract: `It is well known that a trusted setup allows one to solve the Byzantine agreement problem in the presence of $t<n/2$ corruptions,
     bypassing the setup-free $t<n/3$ barrier.
      Alas, the overwhelming majority of protocols in the literature have the caveat that their security crucially hinges on the security of the cryptography and setup, to the point where if the cryptography is broken, even a single corrupted party can violate the security of the protocol.
      Thus these protocols provide higher corruption resilience ($n/2$ instead of $n/3$) for the price of increased assumptions. 
      Is this trade-off necessary?\\

      We further the study of \\emph{crypto-agnostic} Byzantine agreement among $n$ parties that answers this question in the negative.
      Specifically, let $t_s$ and $t_i$ denote two parameters such that (1) $2t_i + t_s < n$, and (2) $t_i \\leq t_s < n/2$.
      Crypto-agnostic Byzantine agreement ensures agreement among honest parties if
      (1) the adversary is computationally bounded and corrupts up to $t_s$ parties, or
      (2) the adversary is computationally unbounded and corrupts up to $t_i$ parties,
      and is moreover given all secrets of all parties established during the setup.
      We propose a compiler that transforms any pair of resilience-optimal Byzantine agreement protocols
      in the authenticated and information-theoretic setting into one that is crypto-agnostic.
      Our compiler has several attractive qualities, including using only $O(\\lambda n^2)$ bits over the two underlying Byzantine agreement protocols,
      and preserving round and communication complexity in the authenticated setting.
      In particular, our results improve the state-of-the-art in bit complexity by at least two factors of $n$ and provide either
      early stopping (deterministic) or expected constant round complexity (randomized).
      We therefore provide fallback security for authenticated Byzantine agreement \\emph{for free} for $t_i \\leq n/4$.`,
    venue: "Eurocrypt 2025",
  },
  {
    authors:
      "With Shyamal Patel, Cliff Stein",
    title:
      "A Simple Algorithm For Dynamic Carpooling with Recourse",
    type: "conference",
    paper_link:"https://arxiv.org/abs/2411.07553",
    abstract: `We give an algorithm for the fully-dynamic carpooling problem with recourse: 
    Edges arrive and depart online from a graph $G$ with $n$ nodes according to an adaptive adversary. 
    Our goal is to maintain an orientation $H$ of $G$ that keeps the discrepancy,
    defined as $\\max_{v \\in V} |\\deg_H^+(v) - \\deg_H^-(v)|$, small at all times.
    We present a simple algorithm and analysis for this problem with recourse based on cycles that simplifies and improves on a result of Gupta et al. [SODA '22].`,
    venue: "SOSA 2025",
  },
  {
  	authors:
  		"With John Bostanci, Tony Metger, Alexander Poremba, Luowen Qian, Henry Yuen",
  	title:
  		"Unitary Complexity Theory and the Uhlmann Transformation Problem",
  	type: "conference",
  	paper_link:"https://arxiv.org/abs/2306.13073",
  	abstract: `State transformation problems such as compressing quantum information or breaking quantum commitments are fundamental quantum tasks.
		However, their computational difficulty cannot easily be characterized using traditional complexity theory,
		which focuses on tasks with classical inputs and outputs. 

		To study the complexity of such state transformation tasks, we introduce a framework for unitary synthesis problems,
		 including notions of reductions and unitary complexity classes. 
		We use this framework to study the complexity of transforming one entangled state into another via local operations. 
		We formalize this as the Uhlmann Transformation Problem, an algorithmic version of Uhlmann's theorem. 
		Then, we prove structural results relating the complexity of the Uhlmann Transformation Problem,
		polynomial space quantum computation, and zero knowledge protocols. 

		The Uhlmann Transformation Problem allows us to characterize the complexity of a variety of tasks in quantum information processing,
		including decoding noisy quantum channels, breaking falsifiable quantum cryptographic assumptions,
		implementing optimal prover strategies in quantum interactive proofs, and decoding the Hawking radiation of black holes. 
		Our framework for unitary complexity thus provides new avenues for studying the computational complexity of many natural
		quantum information processing tasks.`,
	  venue: "QIP 2024,Long Plenary Talk (3 papers out of 111)",
  },
  {
    authors:
      "With Joakim Blikstad, Jan van den Brand, Sagnik Mukhopadhyay, Danupon Nanongkai",
    title:
      "Nearly Optimal Communication and Query Complexity of Bipartite Matching",
    type: "conference",
    paper_link: "https://arxiv.org/abs/2208.02526",
    abstract: `We settle the complexities of the maximum-cardinality bipartite matching problem (BMM) up to
      poly-logarithmic factors in five models of computation: the two-party communication, AND query, OR query,
      XOR query, and quantum edge query models.
      
      Our results answer open problems that have been raised repeatedly since at least three decades ago
      [Hajnal, Maass, and Turan STOC'88; Ivanyos, Klauck, Lee, Santha, and de Wolf FSTTCS'12;  Dobzinski, Nisan,
      and Oren STOC'14; Nisan SODA'21] and tighten the lower bounds shown by Beniamini and Nisan [STOC'21] and
      Zhang [ICALP'04].
      
      We also settle the communication complexity of the generalizations of BMM, such as maximum-cost bipartite
      b-matching and transshipment; and the query complexity of unique bipartite perfect matching (answering an
      open question by Beniamini [2022]).
      
      Our algorithms and lower bounds follow from simple applications of known techniques such as cutting planes
      methods and set disjointness.`,
    venue: "FOCS 2022",
  },
  {
    authors:
      "With Simon Apers, Pawel Gawrychowski, Troy Lee , Sagnik Mukhopadhyay and Danupon Nanongkai",
    title: "Cut Query Algorithms with Star Contraction",
    type: "conference",
    paper_link: "https://arxiv.org/abs/2201.05674",
    abstract: `We study the complexity of determining the edge connectivity of a simple graph with cut queries.
      We show that (i) there is a bounded-error randomized algorithm that computes edge connectivity with $O(n)$
      cut queries, and (ii) there is a bounded-error quantum algorithm that computes edge connectivity with
      $\\tilde{O}(\\sqrt{n})$ cut queries. We prove these results using a new technique called "star contraction" to randomly
      contract edges of a graph while preserving non-trivial minimum cuts. In star contraction vertices randomly
      contract an edge incident on a small set of randomly chosen vertices. In contrast to the related 2-out
      contraction technique of Ghaffari, Nowicki, and Thorup [SODA'20], star contraction only contracts
      vertex-disjoint star subgraphs, which allows it to be efficiently implemented via cut queries.
      
      The $O(n)$ bound from item (i) was not known even for the simpler problem of connectivity, and improves the
      $O(n \\log^3 n)$ bound by Rubinstein, Schramm, and Weinberg [ITCS'18]. The bound is tight under the reasonable
      conjecture that the randomized communication complexity of connectivity is $\\Omega(n\\log n)$, an open question
      since the seminal work of Babai, Frankl, and Simon [FOCS'86]. The bound also excludes using edge
      connectivity on simple graphs to prove a superlinear randomized query lower bound for minimizing a
      symmetric submodular function. Item (ii) gives a nearly-quadratic separation with the randomized
      complexity and addresses an open question of Lee, Santha, and Zhang [SODA'21]. The algorithm can also be
      viewed as making $\\tilde{O}(\\sqrt{n})$ matrix-vector multiplication queries to the adjacency matrix.
       
      Finally, we demonstrate the use of star contraction outside of the cut query setting by designing a
      one-pass semi-streaming algorithm for computing edge connectivity in the vertex arrival setting. This
      contrasts with the edge arrival setting where two passes are required.`,
    venue: "FOCS 2022",
  },
  {
    authors: "With Michal Dory, Sagnik Mukhopadhyay, Danupon Nanongkai",
    title: "Distributed Weighted Min-Cut in Nearly-Optimal Time",
    type: "conference",
    venue: "STOC 2021",
    paper_link: "https://dl.acm.org/doi/10.1145/3406325.3451020",
    video_link: "https://www.youtube.com/embed/On9DX3TkEgo",
    abstract: `Minimum-weight cut (min-cut) is a basic measure of a network’s connectivity strength. While the
      min-cut can be computed efficiently in the sequential setting [Karger STOC’96], there was no efficient way
      for a distributed network to compute its own min-cut without limiting the input structure or dropping the
      output quality: In the standard CONGEST model, existing algorithms with nearly-optimal time (e.g.
      [Ghaffari, Kuhn, DISC’13; Nanongkai, Su, DISC’14]) can guarantee a solution that is
      $(1+\\epsilon)$-approximation at best while the exact $\\tilde{O}(n^{0.8} D^{0.2} + n^{0.9})$-time
      algorithm [Ghaffari, Nowicki, Thorup, SODA’20] works only on simple networks (no weights and no parallel
      edges). Throughout, $n$ and $D$ denote the network’s number of vertices and hop-diameter, respectively.
      For the weighted case, the best bound was $\\tilde{O}(n)$ [Daga, Henzinger, Nanongkai, Saranurak, STOC’19].
      
      In this paper, we provide an exact $\\tilde{O}(\\sqrt{n} + D)$-time algorithm for computing min-cut on
      weighted networks. Our result improves even the previous algorithm that works only on simple networks. Its
      time complexity matches the known lower bound up to polylogarithmic factors. At the heart of our
      algorithm are a routing trick and two structural lemmas regarding the structure of a minimum cut of a
      graph. These two structural lemmas considerably strengthen and generalize the framework of
      Mukhopadhyay-Nanongkai [STOC’20] and can be of independent interest.`,
  },
  {
    authors: "With Lev Yohananov and Eitan Yaakobi",
    title:
      "Double and Triple Node-Erasure-Correcting Codes Over Complete Graphs",
    type: "journal",
    venue: "ISIT 2019, IEEE Trans. Inf. Theory 2020",
    paper_link: "https://ieeexplore.ieee.org/document/8985404/",
    abstract: `In this paper we study array-based codes over graphs for correcting multiple node failures. These
      codes have applications to neural networks, associative memories, and distributed storage systems. We
      assume that the information is stored on the edges of a complete undirected graph and a node failure is
      the event where all the edges in the neighborhood of a given node have been erased. A code over graphs is
      called $\\rho$-node-erasure-correcting if it allows to reconstruct the erased edges upon the failure of
      any $\\rho$ nodes or less. We present a binary optimal construction for double-node-erasure correction
      together with an efficient decoding algorithm, when the number of nodes is a prime number. Furthermore,
      we extend this construction for triple-node-erasure-correcting codes when the number of nodes is a prime
      number and two is a primitive element in $\\mathbb{Z}_n$. These codes are at most a single bit away from optimality.`,
  },
  {
    authors:
      "With Bertie Ancona, Keren Censor-Hillel, Mina Dalirrooyfard and Virginia Vassilevska Williams",
    title: "Distributed Distance Approximation",
    type: "conference",
    venue: "OPODIS 2020",
    paper_link: "https://drops.dagstuhl.de/opus/volltexte/2021/13515/",
    abstract: `Diameter, radius and eccentricities are fundamental graph parameters, which are extensively
      studied in various computational settings. Typically, computing approximate answers can be much more
      efficient compared with computing exact solutions. In this paper, we give a near complete characterization
      of the trade-offs between approximation ratios and round complexity of distributed algorithms for
      approximating these parameters, with a focus on the weighted and directed variants.
      
      Furthermore, we study bi-chromatic variants of these parameters defined on a graph whose vertices are
      colored either red or blue, and one focuses only on distances for pairs of vertices that are colored
      differently. Motivated by applications in computational geometry, bi-chromatic diameter, radius and
      eccentricities have been recently studied in the sequential setting [Backurs et al. STOC'18, Dalirrooyfard
      et al. ICALP'19]. We provide the first distributed upper and lower bounds for such problems.
      
      Our technical contributions include introducing the notion of approximate pseudo-center, which extends the
      pseudo-centers of [Choudhary and Gold SODA'20], and presenting an efficient distributed algorithm for
      computing approximate pseudo-centers. On the lower bound side, our constructions introduce the usage of
      new functions into the framework of reductions from 2-party communication complexity to distributed
      algorithms.`,
  },
  {
    authors:
      "With Alkida Balliu , Sebastian Brandt, Juho Hirvonen, Yannic Maus, Dennis Olivetti and Jukka Suomela",
    title:
      "Brief Announcement: Classification of Distributed Binary Labeling Problems",
    type: "conference",
    venue: "PODC 2020",
    paper_link: "https://dl.acm.org/doi/10.1145/3382734.3405703",
    abstract: `We present a complete classification of the deterministic distributed time complexity for a
      family of graph problems: binary labeling problems in trees in the usual LOCAL model of distributed
      computing. These are locally checkable problems that can be encoded with an alphabet of size two in the
      edge labeling formalism. Examples of binary labeling problems include sinkless orientation, sinkless and
      sourceless orientation, 2-vertex coloring, and perfect matching. We show that the complexity of any such
      problem is in one of the following classes: $O(1), \\Theta (\\log n), \\Theta (n)$, or unsolvable.
      Furthermore, given the description of any binary labeling problem, we can easily determine in which of
      the four classes it is and what is an asymptotically optimal algorithm for solving it.`,
  },
  {
    authors: "With Ofer Grossman and Seri Khoury",
    title:
      "Beyond Alice and Bob: Improved Inapproximability for Maximum Independent Set in CONGEST",
    type: "conference",
    venue: "PODC 2020",
    paper_link: "https://dl.acm.org/doi/10.1145/3382734.3405702",
    video_link: "https://www.youtube.com/embed/orzUsqt4JZA",
    abstract: `By far the most fruitful technique for showing lower bounds for the CONGEST model is reductions
      to two-party communication complexity. This technique has yielded nearly tight results for various
      fundamental problems such as distance computations, minimum spanning tree, minimum vertex cover, and more.
      
      In this work, we take this technique a step further, and we introduce a framework of reductions to
      $t$-party communication complexity, for every $t \\geq 2$. Our framework enables us to show improved
      hardness results for maximum independent set. Recently, Bachrach et al. [PODC 2019] used the two-party
      framework to show hardness of approximation to maximum independent set. They show that finding a
      $(5/6 + \\epsilon)$-approximation requires $\\Omega (n / \\log^6 n)$ rounds, and finding a
      $(7/8 + \\epsilon)$-approximation requires $\\Omega (n^2 / \\log^7 n)$ rounds, in the CONGEST model where
      $n$ is the number of nodes in the network.
      
      We improve the results of Bachrach et al. by using reductions to multi-party communication complexity.
      Our results: (1) Any algorithm that finds a $(1/2 + \\epsilon)$-approximation to maximum independent set
      in the CONGEST model requires $\\Omega (n / \\log^3 n)$ rounds. (2) Any algorithm that finds a
      $(3/4 + \\epsilon)$-approximation to maximum independent set in the CONGEST model requires
      $\\Omega (n^2 / \\log^3 n)$ rounds.`,
  },
  {
    authors:
      "With Alkida Balliu, Sebastian Brandt, Juho Hirvonen, Yannic Maus, Dennis Olivetti and Jukka Suomela",
    title: "Classification of Distributed Binary Labeling Problems",
    type: "conference",
    venue: "DISC 2020",
    paper_link: "https://drops.dagstuhl.de/opus/volltexte/2020/13095/",
    video_link: "https://www.youtube.com/embed/BbFAsexpLOc",
    abstract: `We present a complete classification of the deterministic distributed time complexity for a
      family of graph problems: binary labeling problems in trees. These are locally checkable problems that
      can be encoded with an alphabet of size two in the edge labeling formalism. Examples of binary labeling
      problems include sinkless orientation, sinkless and sourceless orientation, 2-vertex coloring, perfect
      matching, and the task of coloring edges red and blue such that all nodes are incident to at least one
      red and at least one blue edge. More generally, we can encode e.g. any cardinality constraints on
      indegrees and outdegrees.
      
      We study the deterministic time complexity of solving a given binary labeling problem in trees, in the
      usual LOCAL model of distributed computing. We show that the complexity of any such problem is in one of
      the following classes: $O(1), \\Theta (\\log n), \\Theta (n)$, or unsolvable. In particular, a problem
      that can be represented in the binary labeling formalism cannot have time complexity
      $\\Theta (\\log^* n)$, and hence we know that e.g. any encoding of maximal matchings has to use at least
      three labels (which is tight).
      
      Furthermore, given the description of any binary labeling problem, we can easily determine in which of
      the four classes it is and what is an asymptotically optimal algorithm for solving it. Hence the
      distributed time complexity of binary labeling problems is decidable, not only in principle, but also in
      practice: there is a simple and efficient algorithm that takes the description of a binary labeling
      problem and outputs its distributed time complexity.`,
  },
  {
    authors:
      "With Nir Bachrach, Keren Censor-Hillel, Michal Dory, Dean Leitersdorf and Ami Paz",
    title: "Hardness of Distributed Optimization",
    type: "conference",
    venue: "PODC 2019",
    paper_link: "https://dl.acm.org/doi/10.1145/3293611.3331597",
    abstract: `This paper studies lower bounds for fundamental optimization problems in the CONGEST model. We
      show that solving problems exactly in this model can be a hard task, by providing
      $\\tilde{\\Omega} (n^2)$ lower bounds for cornerstone problems, such as minimum dominating set (MDS),
      Hamiltonian path, Steiner tree and max-cut. These are almost tight, since all of these problems can be
      solved optimally in $O(n^2)$ rounds. Moreover, we show that even in bounded-degree graphs and even in
      simple graphs with maximum degree 5 and logarithmic diameter, it holds that various tasks, such as
      finding a maximum independent set (MaxIS) or a minimum vertex cover, are still difficult, requiring a
      near-tight number of $\\tilde{\\Omega} (n)$ rounds.
      
      Furthermore, we show that in some cases even approximations are difficult, by providing an
      $\\tilde{\\Omega} (n^2)$ lower bound for a $(7/8+\\epsilon)$-approximation for MaxIS, and a nearly-linear
      lower bound for an $O(\\log n)$-approximation for the $k$-MDS problem for any constant $k \\geq 2$, as
      well as for several variants of the Steiner tree problem.
      
      Our lower bounds are based on a rich variety of constructions that leverage novel observations, and
      reductions among problems that are specialized for the CONGEST model. However, for several additional
      approximation problems, as well as for exact computation of some central problems in $P$, such as maximum
      matching and max flow, we show that such constructions cannot be designed, by which we exemplify some
      limitations of this framework.`,
  },
];

export default publications;
