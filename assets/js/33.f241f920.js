(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{457:function(e,r,n){"use strict";n.r(r);var t=n(2),v=Object(t.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"title"}),r("p",[r("a",{attrs:{href:"https://spinningup.openai.com/en/latest/spinningup/spinningup.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("原文地址"),r("OutboundLink")],1),r("br"),e._v(" "),r("a",{attrs:{href:"https://spinningup.openai.com/en/latest/spinningup/keypapers.html#",target:"_blank",rel:"noopener noreferrer"}},[e._v("Key Papers in DRL"),r("OutboundLink")],1),r("br"),e._v(" "),r("a",{attrs:{href:"https://spinningup.openai.com/en/latest/spinningup/spinningup.html#id56",target:"_blank",rel:"noopener noreferrer"}},[e._v("References"),r("OutboundLink")],1)])]),r("p",[e._v("如果你有志于成为一名 DRL 研究者，你可能已经听说了很多关于 DRL 的事情，你知道 DRL 很难并且有时效果很差。即使跟着教程一步一步来，DRL 的再现性也是一个挑战。如果你从头开始学习，学习曲线是非常陡峭的，虽然有很多可供学习的优秀资源，但并没有一个清晰明确的学习路径。本专栏的目标是帮助你跨越最初的障碍，让你清楚如何成为一个 DRL 研究者。特别的是，这将概述一个可以增加原始知识的课程，同时也能和一些零碎的知识结合以得到更好的研究。")]),e._v(" "),r("h2",{attrs:{id:"背景知识"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#背景知识"}},[e._v("#")]),e._v(" 背景知识")]),e._v(" "),r("p",[r("strong",[e._v("建立扎实的数学基础。")]),e._v(" 在概率和统计学里，你需要熟悉随机变量、贝叶斯定理、概率的链式法则、期望、标准差和重要性抽样。在多元微积分里，你需要理解梯度和泰勒展开公式。")]),e._v(" "),r("p",[r("strong",[e._v("建立深度学习的常识框架。")]),e._v(" 你不需要了解每一个特殊的技巧和架构，但是具备基础知识是很有用的。了解一些基础的结构（多层感知机、循环神经网络、LSTM、GRU、卷积层、resnets、注意力机制），了解一些常见的正则化方法（weight decay、dropout），了解一些常见的标准化方法（批标准化、层标准化、权重标准化）和一些常见的优化器（SGD、momentum SGD、Adam等等），以及了解重参数化的技巧。")]),e._v(" "),r("p",[r("strong",[e._v("至少熟悉一个深度学习库。")]),e._v(" 从 Tensorflow 或者 Pytorch 开始都可以，你不需要知道如何做所有的事情，但应该对实现一个简单的监督学习程序很有信心。")]),e._v(" "),r("p",[r("strong",[e._v("熟悉RL中的主要概念和术语")]),e._v(" 了解什么是状态、动作、轨迹、策略、奖励、价值函数、动作价值函数。如果你对这些概念还很陌生，SpinningUp 里有对这些材料的介绍。OpenAI Hackathon 的 RL-intro 和 Lilian Weng 的特别而全面的 RL 概述也值得一看。或者如果你是那种享受数学理论的人，你可以选择研究单调改进理论的数学方法或者经典的RL算法。")]),e._v(" "),r("h2",{attrs:{id:"从实践中学习"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#从实践中学习"}},[e._v("#")]),e._v(" 从实践中学习")]),e._v(" "),r("p",[r("strong",[e._v("编写自己的算法实现。")]),e._v(" 你应该从头开始实现尽可能多地实现核心的 DRL 算法，并以写出每个算法的最短正确实现为目的。到目前为止，这是了解它们如何工作的最好方法，也是了解它们具体性能特征的最好方法。")]),e._v(" "),r("p",[r("strong",[e._v("简洁是至关重要的。")]),e._v(" 你应该循序渐进的将算法用于自己的工作，最开始只需要实现最简单的算法，然后逐渐增加复杂性。如果你开始就去构建一个有太多组件的项目，那么它可能一开始就会出现问题，并且需要耗费几周的时间来调试。对于刚接触 DRL 的人来说，这是一种常见的失败模式，如果你发现自己陷入了这种模式，不要灰心丧气，但在以后遇到更复杂的任务是一定要尝试改变方向使用更简单的算法。")]),e._v(" "),r("p",[r("strong",[e._v("如何选择算法？")]),e._v(" 你可能会从 VPG、DQN、A2C、PPO 和 DDPG 开始学习，大致按照这个顺序。这些算法的最简版本都可以用几百行代码实现甚至更少。在尝试编写这些算法的并行版本之前先编写单线程代码，至少对一个算法尝试并行化。")]),e._v(" "),r("p",[r("strong",[e._v("专注于理解。")]),e._v(" 编写有效的 RL 代码需要对算法有清晰的、面向细节的理解。这也是破碎的 RL 代码经常无声无息地失败地原因，有时候虽然代码看起来运行良好，但是智能体并未学习到完成任务的能力。通常情况下，问题的关键在于某些东西的计算使用了错误的方程式或者处于错误的分布上，也可能是数据传输到了错误的地方。有时找到这些 BUG 的唯一方法就是以批判的眼光来阅读代码，准确的知道它应该做什么，并找出它偏离正确行为的地方。开发这些知识需要你在阅读文献的同时了解其他已有的实现，所以你应该把大量的时间花在阅读上。")]),e._v(" "),r("p",[r("strong",[e._v("在论文中寻找什么？")]),e._v(" 当实现基于论文的算法时，仔细检查论文，尤其是消融分析和补充材料。消融分析会让你直觉地了解什么参数或者子程序对工作有最大的影响，这些信息对 BUG 诊断很有帮助。补充材料里通常会提供关于特定细节的信息，比如网络架构或者优化超参数，你应该尝试将自己的实现与这些细节保持一致，以提高复现的可能性。")]),e._v(" "),r("p",[r("strong",[e._v("不要过于在意论文中的细节。")]),e._v(" 有时候论文中使用了很多不是严格必要的技巧，这一点需要小心并尝试在可能的地方简化。例如 DDPG 原论文中提出了一个比较复杂的神经网络结构和初始化模式以及批标准化。这些技巧并不是严格必要的，一些 DDPG 的实践使用了简单的网络结构便获得了最好的结构。另一个例子是，A3C 原论文中使用了来自许多 actor-learners 的异步更新，但是结果表明同步更新的效果也很好。")]),e._v(" "),r("p",[r("strong",[e._v("也不要过于在意现有的算法实现。")]),e._v(" 学习现有的算法实现有启发性的效果，但是不要过于在意这些实现中的工程细节。RL 代码库经常会通过一些抽象化的选择提高算法之间的代码重用性，但是当你针对单个算法或者单个案例编写代码时，这些可复用的代码细节是不必要的。")]),e._v(" "),r("p",[r("strong",[e._v("在简单的环境中快速迭代。")]),e._v(" 为了调试你自己的算法实现，可以先在一些简单的环境中尝试，简单环境的学习过程是很快的，比如 OpenAI Gym 里的 Cartpole-v0、InvertedPendulum-v0、FrozenLake-v0 和 HalfCheetah-v2。如果你还没有在最简单的玩具任务中验证过自己的算法，就不要尝试在 Atari 或者复杂的仿真环境中运行算法。在算法调试阶段，理想的本地实验周转时间应该小于五分钟或者稍长一点但不要太长。这些小规模的实验不需要任何特殊的硬件，在CPU上运行也不会有太多麻烦。")]),e._v(" "),r("p",[r("strong",[e._v("如果算法效果不好，先假设存在一个 BUG 。")]),e._v(" 在调整超参数之前，先花费大量精力寻找 BUG ，通常确实存在 BUG 。错误的超参数可能会显著地降低 RL 性能，但是如果你使用地超参数与论文中的参数或者经典算法实现中的参数相似，那可能就不是超参数的问题。同样有必要记住的是，有时候一个有重大 BUG 的算法在一个环境中也可能有效果，所以一旦你的结果看起来希望满满的时候，在多个环境中进行测试是至关重要的。")]),e._v(" "),r("p",[r("strong",[e._v("测量一切。")]),e._v(" 做很多测量来看看到底发生了什么。在每次迭代中得到的关于学习过程的统计数据越多，代码调试就越容易，毕竟你看不到程序崩溃就无法判断程序是否已经崩溃。我自己习惯查看累计奖励的平均值、标准差、最小值和最大值，回合长度，价值函数估计，损失值和任何探索参数的细节（随机策略优化的平均熵或 epsilon-greedy 中的 epsilon）。此外，时不时地注意你的智能体的表现，这会让你得到一些在其他情况下无法得到的见解。")]),e._v(" "),r("p",[r("strong",[e._v("当实验成功时再调整实验的规模。")]),e._v(" 当你实现了一个 RL 算法并且在最简单的环境中有不错的效果，接着就可以在更复杂的环境中进行测试。这个阶段的实验将需要更长的实践，大约是几个小时到几天之间，具体取决于你的硬件配置，可以考虑使用云计算进行实验。")]),e._v(" "),r("p",[r("strong",[e._v("保持以上习惯！")]),e._v(" 这些习惯在你开始学习 DRL 之后都是值得坚持的，它们会让你的研究更加顺利。")]),e._v(" "),r("h2",{attrs:{id:"开发一个研究项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发一个研究项目"}},[e._v("#")]),e._v(" 开发一个研究项目")]),e._v(" "),r("p",[e._v("在你对 DRL 的基础知识熟悉了之后，你就应该开始突破极限，做一些研究工作。首先你需要一个关于某个项目的idea。")]),e._v(" "),r("p",[r("strong",[e._v("从探索文献开始了解这个领域的主题。")]),e._v(" 你可能会感兴趣的话题范围十分广泛：样本效率、探索、迁移学习、层次结构、记忆、基于模型的RL、元学习和多智能体等等。如果你正在寻找灵感，或者只是想要大致地了解一下，你可以查看 Spinning Up 的关键论文列表。从中找一篇你喜欢的、你感兴趣的或者能激发你的灵感的文章，然后仔细地阅读。利用其中的相关工作部分和引用部分找到密切相关的论文，然后深入地挖掘相关文献。这样做会使你明白哪些问题尚未解决，你可以在哪些方面发光发热。")]),e._v(" "),r("p",[r("strong",[e._v("产生idea的方法：")]),e._v(" 有许多不同的开始思考idea的想法，你选择的框架会影响你的项目怎样进展以及接下来会面临的风险。以下是一些例子：")]),e._v(" "),r("p",[r("strong",[e._v("Frame1: 改进现有方法。")]),e._v(" 这就是渐进主义的视角，你可以通过调整现有的算法来尝试在已建立的问题设置上获得更好的性能。在这种框架下，重新实现先前的工作是非常有帮助的，因为你会从中了解到现有算法的脆弱性和提升空间。这种框架对于初学者来说是最容易理解的，但是对于任何经验水平的研究人员来说都是值得使用的。虽然一些研究人员发现渐进主义没那么令人兴奋，但机器学习中一些最令人印象深刻的成就就是这样产生的。")]),e._v(" "),r("p",[e._v("因为这种框架下的项目与现有的方法联系紧密，所以它们自然地被局限在一定的范围中。它们可以很快地完成，这可能是我们特别是初学者所需要的。但这也带来了一定的风险，你对一个算法的调整很可能无法改善它，在这种情况下，除非你想出更多的调整，否则直到项目结束你也不知道下一步要做什么。")]),e._v(" "),r("p",[r("strong",[e._v("Frame2: 关注未解决的Benchmarks。")]),e._v(" 你的目标是成功完成一项以前没有解决过的任务，而不是思考如何提升现有的方法。比如在 Sonic domain 或者 Gym Retro 中实现从训练到测试的完美泛化。当你忙于一项未解决的任务是，你可能会尝试各种各样的方法，包括以前的方法和你为这个项目新发明的方法。对于新手来说解决这类问题是可能的，但学习曲线可能会更加陡峭。")]),e._v(" "),r("p",[e._v("这类框架的范围更加广泛，并且可以持续一段时间。主要的风险是实际上如果没有实质性的突破，这类问题是难以解决的。这意味着很可能你将花费大量的实践却没有取得任何进展。但是即使这样的项目失败了，它也常常会让研究人员获得许多新的灵感，这些新的灵感很可能成为其他项目的关键。")]),e._v(" "),r("p",[r("strong",[e._v("Frame3: 建立一个新的问题设定。")]),e._v(" 与其考虑现有的方法或当前的重大挑战，不如考虑一个尚未研究的完全不同的概念问题，然后找出如何在这方面取得进展。对于这些项目，标准的 benchmark 可能还不存在，所以你必须设计一个。这可能是一个巨大的挑战，但这是值得一做的，伟大的 benchmark 会推动整个领域的进步。")]),e._v(" "),r("p",[e._v("这类框架的问题如大海捞针一般该出现时就出现了。")]),e._v(" "),r("p",[r("strong",[e._v("避免重复造轮子。")]),e._v(" 当你想出一个好主意要开始测试时简直太棒了，但是加入你还处于研究的早期阶段，你需要做最彻底的调查确保它尚未被别人完成。在项目进行到一半时才发现有一篇关于你想法的论文会让人非常沮丧，发现有同时进行的工作会更加沮丧，这种情况经常发生。但不要被此吓到，也绝对不要让这种情况激励你给尚未完成的研究画上句号，并过分吹嘘部分工作的优点。做好研究并且经过全面彻底的审查之后再完成你的项目，因为这才是重要的，也是迄今为止最重要的。")]),e._v(" "),r("h2",{attrs:{id:"做一个严谨的rl研究者"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#做一个严谨的rl研究者"}},[e._v("#")]),e._v(" 做一个严谨的RL研究者")]),e._v(" "),r("p",[e._v("假设你已经有了一个idea，而且你相当肯定他还没被完成。你使用你的技能实现了它，并且在标准域上对它进行测试。它看起来效果不错！但这意味着什么呢？它必须发挥多大的作用才能变得重要？这是 DRL 研究中最困难的部分之一。为了验证你的想法是否是一项有意义的贡献，你必须严格地证明它确实比可能最强的 baseline 算法有更好的性能，无论当前在你的测试域上实现了怎样的 SOTA 算法。如果你已经发明了一个新的测试域，因此没有以前的 SOTA，你仍然需要尝试哪个文献中最可靠的算法在新的测试域中可能拥有良好的表现，然后击败它。")]),e._v(" "),r("p",[r("strong",[e._v("建立公平的比较。")]),e._v(" 如果你从头开始实现 baseline，而不是直接与另一篇论文的数字进行比较，那么花在优化 baseline 的实践与花在优化自己算法上的实践一样重要，这将确保比较是公平的。此外，即使你的算法与 baseline 之间存在实质性差异，也要尽最大努力保持所有其他条件都相同。例如如果你正在研究结构变量，就需要保持你的模型和 baseline 的模型参数数量大致相同。在任何情况下都不能让 baseline 存在缺陷！事实证明 RL 中的 baselines 都十分强壮，要想在这些 baseline 上去的十分巨大的进步可能很棘手，需要在算法设计方面具备很好的洞察力。")]),e._v(" "),r("p",[r("strong",[e._v("消除随机性的干扰。")]),e._v(" 当心随机种子会使事情看起来比实际情况更强或更弱，所以你需要对许多随机种子运行所有操作。（至少三组，如果你想更加周全就运行十组或者更多。）这一点非常重要并且值得大力强调，在许多常见的例子里，DRL相对于随机种子来说看起来相当脆弱。可能存在足够的方差使得两组不同的随机种子可以产生差异显著的学习曲线，以至于它们看起来根本不像是来自于同一分布。")]),e._v(" "),r("p",[r("strong",[e._v("运行完整性更高的实验。")]),e._v(" 不要只从最好或最有趣的运行中获得结果以便在论文中使用，相反，最好为你准备比较的所有方法运行最新的最终实验，并提前准备报告这些实验的结果，无论结果如何。这是为了实现一种弱形式的预注册，即使用调整阶段提出假设，使用最终运行得出结论。")]),e._v(" "),r("p",[r("strong",[e._v("分别检查每个主张。")]),e._v(" 做研究的另一个关键方面是进行消融分析，你提出的任何方法都可能有几个关键的设计决策，比如架构选择或者正则化技术，每个决策都可能单独影响性能。你可能会主张在你的工作中这些设计决策共同起到了帮助作用，但这实际上是几个伪主张的集合，每个设计元素都有可能作为一个主张。通过系统地评估如果你将他们换成其他设计决策或者完全删除之后会发生什么，你可以明白如何正确地为你的方法带来的好处分功。这会使你对每一个独立的主张都有一定的信息，并提高你的工作的整体优势。")]),e._v(" "),r("h2",{attrs:{id:"结语"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[e._v("#")]),e._v(" 结语")]),e._v(" "),r("p",[e._v("DRL 是一个令人兴奋的、快速发展的研究领域，我们需要尽可能多的人来解决开放性问题并在这些问题上取得进展。希望你在读完这篇文章后能够更好地准备成为其中的一员，并让我们知道。")]),e._v(" "),r("h2",{attrs:{id:"其他资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他资源"}},[e._v("#")]),e._v(" 其他资源")]),e._v(" "),r("p",[e._v("考虑阅读其他关于如何在这个领域中成长为一名研究人员或者工程师的文章。")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://rockt.github.io/2018/08/29/msc-advice",target:"_blank",rel:"noopener noreferrer"}},[e._v("Advice for Short-term Machine Learning Research Projects"),r("OutboundLink")],1),e._v(", by Tim Rocktäschel, Jakob Foerster and Greg Farquhar.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://80000hours.org/articles/ml-engineering-career-transition-guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ML Engineering for AI Safety & Robustness: a Google Brain Engineer’s Guide to Entering the Field"),r("OutboundLink")],1),e._v(", by Catherine Olsson and 80,000 Hours.")])])}),[],!1,null,null,null);r.default=v.exports}}]);